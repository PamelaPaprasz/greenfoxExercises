from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

def lines_to_center(x, y):
    line = canvas.create_line(x, y, 150, 150)
tree_lines_to_center(0, 0)
tree_lines_to_center(0, 40)
tree_lines_to_center(0, 80)

# create a line drawing function that takes 2 parameters:
# the x and y coordinates of the line's starting point
# and draws a line from that point to the center of the canvas.
# draw 3 lines with that function.

root.mainloop()
