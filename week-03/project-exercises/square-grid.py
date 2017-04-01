from tkinter import *
import time

root = Tk()

canvas = Canvas(root, width='600', height='600')
canvas.pack()

def first_square(x, y, size):
    canvas.create_rectangle(x, y, size + x, size + y, fill = 'indigo', outline = 'pink', width= 2)

def square_in_square(x, y, size):
    first_square(x, y, size)
    time.sleep(0.0001)
    canvas.update()

    if size > 5:

        square_in_square(x-size*1/4,y-size*1/4,size/2)
        square_in_square(x+size*3/4,y-size*1/4,size/2)
        square_in_square(x+size*3/4,y+size*3/4,size/2)
        square_in_square(x-size*1/4,y+size*3/4,size/2)

square_in_square(150, 150, 300)

root.mainloop()
