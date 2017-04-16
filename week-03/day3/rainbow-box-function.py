from tkinter import *
import time
import random

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()


def rainbow_box(size, color):
        center = 150
        square = canvas.create_rectangle(center - size / 2, center - size /2, center + size / 2, center + size /2, fill = color)
        return square

rainbow_box(10, 'green')


colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
random.shuffle(colors)
size = 300

for i in range (len(colors)):
    time.sleep(0.5)
    rainbow_box(size, colors[i])
    size -= 40
    canvas.update()

# create a square drawing function that takes 2 parameters:
# the square size, and the fill color,
# and draws a square of that size and color to the center of the canvas.
# create a loop that fills the canvas with rainbow colored squares.

root.mainloop()
