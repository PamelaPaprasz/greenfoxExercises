from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

pinkRectangle = canvas.create_rectangle(0, 0, 300, 50, fill = "pink", outline = "pink")
redRectangle = canvas.create_rectangle(300, 300, 200, 100, fill = "red", outline = "red")
whiteRectangle = canvas.create_rectangle(0, 300, 200, 50, fill = "white", outline = "white")
blueRectangle = canvas.create_rectangle(200, 50, 300, 100, fill = "blue", outline = "blue")
# draw four different size and color rectangles.

root.mainloop()
