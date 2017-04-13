from tkinter import *
import random

root = Tk()

canvas = Canvas(root, width='720', height='720')

class Tile():
    def __init__(self):
        self.image_floor = PhotoImage(file= 'floor.png')
        self.image_wall = PhotoImage(file = 'wall.png')
        
    def draw_map(self):
        
        self.map_matrix = [
        [0, 0, 0, 1, 0, 0, 0, 0, 0, 0], 
        [0, 0, 0, 1, 0, 0, 0, 1, 1, 0], 
        [0, 1, 1, 1, 0, 1, 0, 1, 1, 0], 
        [0, 0, 0, 0, 0, 1, 0, 0, 0, 0], 
        [1, 1, 1, 1, 0, 1, 1, 1, 1, 0], 
        [0, 1, 0, 1, 0, 0, 0, 0, 1, 0], 
        [0, 1, 0, 1, 0, 1, 1, 0, 1, 0], 
        [0, 0, 0, 0, 0, 1, 1, 0, 1, 0], 
        [0, 1, 1, 1, 0, 0, 0, 0, 1, 0], 
        [0, 0, 0, 1, 0, 1, 1, 0, 1, 0], 
        [0, 1, 0, 1, 0, 1, 0, 0, 0, 0]
        ]

        for y in range(len(self.map_matrix)):
            for x in range(len(self.map_matrix[y])):
                if self.map_matrix[y][x] == 0:
                    canvas.create_image(72 * x, 72 * y, anchor = NW, image = self.image_floor)
                else:
                    canvas.create_image(72 * x, 72 * y, anchor = NW, image = self.image_wall)
                                                        

class Baddie():
    def __init__(self):
        self.image_boss = PhotoImage(file = 'boss.png')
        self.image_skeleton = PhotoImage(file = 'skeleton.png')
        self.x = random.randint(0, 9)
        self.y = random.randint(0, 9)
        self.id = 0
                
    def draw_skeleton(self, canvas):
        canvas.delete(self.id)
        self.id = canvas.create_image(self.x * 72, self.y * 72, anchor = NW, image = self.image_skeleton)
        
    def draw_boss(self, canvas):
        canvas.delete(self.id)
        self.id = canvas.create_image(self.x * 72, self.y * 72, anchor = NW, image = self.image_boss)
        

class Hero():
    def __init__(self):
        self.image_hero_down = PhotoImage(file = 'hero-down.png')
        self.image_hero_left = PhotoImage(file = 'hero-left.png')
        self.image_hero_right = PhotoImage(file = 'hero-right.png')
        self.image_hero_up = PhotoImage(file = 'hero-up.png')
        self.hero_x = random.randint(0, 9)
        self.hero_y = random.randint(0, 9)
        self.start_hero = 0
        
        self.hero_hp = 20 + 3 * random.randint(1, 6)
        self.hero_dp = 2 * random.randint(1, 6)
        self.hero_sp = 5 + random.randint(1, 6)

    def draw_hero(self, canvas, hero_image):
        canvas.delete(self.start_hero)
        self.start_hero = canvas.create_image(self.hero_x * 72, self.hero_y * 72, anchor = NW, image = hero_image)


class GameLogic():
    def __init__(self):
        canvas.bind("<KeyPress>", self.on_key_press)
        self.hero = Hero()
        self.floor = Tile()
        self.floor.draw_map()
        self.hero.draw_hero(canvas, self.hero.image_hero_down)
        self.skeleton1 = Baddie()
        self.skeleton2 = Baddie()
        self.skeleton3 = Baddie()
        self.skeletons = [self.skeleton1, self.skeleton2, self.skeleton3]
        self.is_it_free_for_skeleton()
        self.boss = Baddie()
        self.is_it_free_for_boss()
    
    def is_it_free_for_hero(self, x, y):
        if 0 <= x <= 9 and 0 <= y <= 9:
            if self.floor.map_matrix[y][x] == 0:
                self.hero.draw_hero(canvas, self.hero.image_hero_down)
                self.hero.hero_x = x
                self.hero.hero_y = y
                            
    def is_it_free_for_skeleton(self):
        for skeleton in self.skeletons:
            while self.floor.map_matrix[skeleton.y][skeleton.x] != 0:
                skeleton.x = random.randint(0, 9)
                skeleton.y = random.randint(0, 9)
            skeleton.draw_skeleton(canvas)
            
    def is_it_free_for_boss(self):
        while self.floor.map_matrix[self.boss.y][self.boss.x] != 0:
            self.boss.x = random.randint(0, 9)
            self.boss.y = random.randint(0, 9)
        self.boss.draw_boss(canvas)
                            
    def on_key_press(self, e):
        self.e = e 
        
        if self.e.keycode == 37:
            self.is_it_free_for_hero(self.hero.hero_x - 1, self.hero.hero_y)
            self.hero.draw_hero(canvas, self.hero.image_hero_left)
        elif self.e.keycode == 38:
            self.is_it_free_for_hero(self.hero.hero_x, self.hero.hero_y - 1)
            self.hero.draw_hero(canvas, self.hero.image_hero_up)
        elif self.e.keycode == 39:
            self.is_it_free_for_hero(self.hero.hero_x + 1, self.hero.hero_y)
            self.hero.draw_hero(canvas, self.hero.image_hero_right)
        elif self.e.keycode == 40:
            self.is_it_free_for_hero(self.hero.hero_x, self.hero.hero_y + 1)
            self.hero.draw_hero(canvas, self.hero.image_hero_down)
                

logic = GameLogic()
canvas.pack()
canvas.focus_set()
root.mainloop()