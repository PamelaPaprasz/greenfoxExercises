from tkinter import *

root = Tk()

canvas = Canvas(root, width='720', height='720')

class Tile():
    def __init__(self):
        self.image_floor = PhotoImage(file = r'd:\greenfox\PamelaPaprasz\week-05\day1\floor.png')
        self.image_wall = PhotoImage(file = r'd:\greenfox\PamelaPaprasz\week-05\day1\wall.png')
        
    def draw(self):
        self.first_square = canvas.create_image(36, 36, image = self.image_floor)
        
        for raw in range(10):
            for column in range(10):
                canvas.create_image(36 + 72 * raw, 36 + 72 * column, image = self.image_floor)
                
        self.wall_matrix = [
        [3, 5], [3, 5, 7, 8], [1, 2, 3, 5, 7, 8], [5], [0, 1, 2, 3, 5, 6, 7, 8], [1, 3, 8], [1, 3, 5, 6, 7], [5, 6, 8], [1, 2, 3, 8], [3, 5, 6, 8], [1, 3, 5]
        ]
        
        for index_main_list in range(len(self.wall_matrix)):
            for index_sub_list in self.wall_matrix[index_main_list]:
                canvas.create_image(36 + 72 * index_sub_list, 36 + 72 * index_main_list, image = self.image_wall)
                    

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
        self.hero_x = 36
        self.hero_y = 36
        self.start_hero = 0

    def draw(self, canvas, hero_image):
        canvas.delete(self.start_hero)
        self.start_hero = canvas.create_image(self.hero_x, self.hero_y, image = hero_image)


class GameLogic():
    def __init__(self):
        canvas.bind("<KeyPress>", self.on_key_press)
    
    def on_key_press(self, e):
        self.e = e 
        
        if self.e.keycode == 37:
            hero.hero_x = hero.hero_x - 72
            hero.draw(canvas, hero.image_hero_left)
        elif self.e.keycode == 38:
            hero.hero_y = hero.hero_y -72
            hero.draw(canvas, hero.image_hero_up)
        elif self.e.keycode == 39:
            hero.hero_x = hero.hero_x + 72
            hero.draw(canvas, hero.image_hero_right)
        elif self.e.keycode == 40:
            hero.hero_y = hero.hero_y + 72
            hero.draw(canvas, hero.image_hero_down)
                


floor = Tile()
hero = Hero()
logic = GameLogic()
floor.draw()
hero.draw(canvas, hero.image_hero_down)


canvas.pack()
canvas.focus_set()
root.mainloop()

