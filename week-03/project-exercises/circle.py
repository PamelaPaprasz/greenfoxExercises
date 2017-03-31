from tkinter import *
import time

root = Tk()

canvas = Canvas(root, width='800', height='800')
canvas.pack()

def first_circle(x, y, size):
    canvas.create_oval(x, y, size + x, size + y, fill = 'yellow', outline = 'blue')

def circle_in_circle(x, y, size):
    first_circle(x, y, size)
    time.sleep(0.001)
    canvas.update()

    if size > 5:
        circle_in_circle(x + size*1/4, y + 1/2 * size, size/2)
        circle_in_circle(x + size*28/67, y + size*1/14, size/2)
        circle_in_circle(x + size*1/13, y + size*1/14, size/2)

circle_in_circle(10, 10, 400)



root.mainloop()
