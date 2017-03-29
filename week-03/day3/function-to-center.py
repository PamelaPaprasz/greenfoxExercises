from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

def lines_to_center(x, y):

    for i in range(15):
        line = canvas.create_line(i * 20, y, 150, 150)
        line = canvas.create_line(x, i * 20, 150, 150)
        line = canvas.create_line(i * 20, y + 300, 150, 150)
        line = canvas.create_line(x + 300, i * 20, 150, 150)

lines_to_center(0, 0)


# create a line drawing function that takes 2 parameters:
# the x and y coordinates of the line's starting point
# and draws a line from that point to the center of the canvas.
# fill the canvas with lines from the edges, every 20 px, to the center.

root.mainloop()
