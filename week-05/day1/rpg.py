from tkinter import *
import random

root = Tk()

canvas = Canvas(root, width='720', height='720')

class Tile():
    def __init__(self):
        self.image_floor = PhotoImage(file= r'd:\greenfox\PamelaPaprasz\week-05\day1\floor.png')
        self.image_wall = PhotoImage(file = r'd:\greenfox\PamelaPaprasz\week-05\day1\wall.png')
        
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
        
        for row in range(len(self.map_matrix)):
            for i in range(len(self.map_matrix[row])):
                if self.map_matrix[row][i] == 0:
                    canvas.create_image(72 * i, 72 * row, anchor = NW, image = self.image_floor)
                else:
                    canvas.create_image(72 * i, 72 * row, anchor = NW, image = self.image_wall)
                                                        

class Baddie():
    def __init__(self):
        self.image_boss = PhotoImage(file = r'd:\greenfox\PamelaPaprasz\week-05\day1\boss.png')
        self.image_skeleton = PhotoImage(file = r'd:\greenfox\PamelaPaprasz\week-05\day1\skeleton.png')


class Hero():
    def __init__(self):
        self.image_hero_down = PhotoImage(file = r'd:\greenfox\PamelaPaprasz\week-05\day1\hero-down.png')
        self.image_hero_left = PhotoImage(file = r'd:\greenfox\PamelaPaprasz\week-05\day1\hero-left.png')
        self.image_hero_right = PhotoImage(file = r'd:\greenfox\PamelaPaprasz\week-05\day1\hero-right.png')
        self.image_hero_up = PhotoImage(file = r'd:\greenfox\PamelaPaprasz\week-05\day1\hero-up.png')
        self.hero_x = 0
        self.hero_y = 0
        self.start_hero = 0
        
        self.hero_hp = 20 + 3 * random.randint(1, 6)
        self.hero_dp = 2 * random.randint(1, 6)
        self.hero_sp = 5 + random.randint(1, 6)

    def draw_hero(self, canvas, hero_image):
        canvas.delete(self.start_hero)
        self.start_hero = canvas.create_image(self.hero_x, self.hero_y, anchor = NW, image = hero_image)


class GameLogic():
    def __init__(self):
        canvas.bind("<KeyPress>", self.on_key_press)
    
    def wall_detector(self):
        for i in range(len(floor.map_matrix)):
            for e in range(len(floor.map_matrix[i])):
                if floor.map_matrix[i][e] == 1:
                    return True
        return False
                    
    def on_key_press(self, e):
        self.e = e 
        
        if self.e.keycode == 37 and hero.hero_x > 0 and logic.wall_detector() == True:
            hero.hero_x = hero.hero_x - 72
            hero.draw_hero(canvas, hero.image_hero_left)
        elif self.e.keycode == 38 and hero.hero_y > 0 and logic.wall_detector() == True:
            hero.hero_y = hero.hero_y -72
            hero.draw_hero(canvas, hero.image_hero_up)
        elif self.e.keycode == 39 and hero.hero_x < 640 and logic.wall_detector() == True:
            hero.hero_x = hero.hero_x + 72
            hero.draw_hero(canvas, hero.image_hero_right)
        elif self.e.keycode == 40 and hero.hero_y < 640 and logic.wall_detector() == True:
            hero.hero_y = hero.hero_y + 72
            hero.draw_hero(canvas, hero.image_hero_down)
                


floor = Tile()
hero = Hero()
logic = GameLogic()
floor.draw_map()
hero.draw_hero(canvas, hero.image_hero_down)


canvas.pack()
canvas.focus_set()
root.mainloop()

