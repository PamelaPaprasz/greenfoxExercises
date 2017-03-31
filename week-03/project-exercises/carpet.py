from tkinter import *
import time

root = Tk()

canvas = Canvas(root, width='600', height='600')
canvas.pack()

def first_square(x, y, size):
    canvas.create_rectangle(x, y, size + x, size + y, fill = 'indigo', outline = 'red')

def square_in_square(x, y, size):
    first_square(x, y, size)
    time.sleep(0.0001)
    canvas.update()

    if size > 5:
        square_in_square(x, y, size/3)
        square_in_square(x + size*1/3, y, size/3)
        square_in_square(x + size*2/3, y, size/3)
        square_in_square(x, y + size*1/3, size/3)
        square_in_square(x + size*2/3, y + 1/3 * size, size/3)
        square_in_square(x, y + 2/3 * size, size/3)
        square_in_square(x + 1/3 * size, y + 2/3 * size, size/3)
        square_in_square(x + 2/3 * size, y + 2/3 * size, size/3)

square_in_square(0, 0, 600)



root.mainloop()
