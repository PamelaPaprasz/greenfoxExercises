from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

def square_drawing_size(size):
    center = 150
    canvas.create_rectangle(center - size / 2, center - size /2, center + size / 2, center + size /2)

square_drawing_size(50)
square_drawing_size(90)
square_drawing_size(150)

# create a square drawing function that takes 1 parameter:
# the square size
# and draws a square of that size to the center of the canvas.
# draw 3 squares with that function.

root.mainloop()
