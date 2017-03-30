from tkinter import *

root = Tk()

canvas = Canvas(root, width='600', height='600')
canvas.pack()

def first_square(x, y, size):
    canvas.create_rectangle(x, y, size + x, size + y, fill = 'yellow', outline = 'black')

def square_in_square(x, y, size):
    first_square(x, y, size)

    if size > 5:
        square_in_square(x + 1/3 * size, y, size/3)
        square_in_square(x, y + 1/3 * size, size/3)
        square_in_square(x + 1/3 * size, y + 2/3 * size, size/3)
        square_in_square(x + 2/3 * size, y + 1/3 * size, size/3)

square_in_square(0, 0, 600)



root.mainloop()
