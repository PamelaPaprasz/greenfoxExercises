from tkinter import *

root = Tk()

canvas = Canvas(root, width='720', height='720')
canvas.pack()

class Tile():
    def __init__(self):
        self.image_floor = PhotoImage(file = r'd:\greenfox\PamelaPaprasz\week-05\day1\floor.png')
        self.image_wall = PhotoImage(file = r'd:\greenfox\PamelaPaprasz\week-05\day1\wall.png')
        
    def draw(self):
        frist_square = canvas.create_image(36, 36, image = self.image_floor)
        
        for raw in range(10):
            for column in range(10):
                canvas.create_image(36 + 72 * raw, 36 + 72 * column, image = self.image_floor)
                


floor = Tile()
floor.draw()
root.mainloop()