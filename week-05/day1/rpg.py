from tkinter import *

root = Tk()

canvas = Canvas(root, width='720', height='720')
canvas.pack()

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

    def draw(self):
        self.start_hero = canvas.create_image(36, 36, image = self.image_hero_down)


class GameLogic(Tile):
    
    def on_key_press(e):
        if e.keycode == 37:
            self.image_hero_left = self.image_hero_left - 72
        elif e.keycode == 38:
            self.image_hero_up = self.image_hero_up -72
        elif e.keycode == 39:
            self.image_hero_right = self.image_hero_right + 72
        elif e.keycode == 40:
            self.image_hero_down = self.image_hero_down + 72
                
    canvas.bind("<KeyPress>", on_key_press)


floor = Tile()
hero = Hero()
floor.draw()
hero.draw()
root.mainloop()