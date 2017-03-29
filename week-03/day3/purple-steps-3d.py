from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

xtl = 10
ytl = 10
xbr = 20
ybr = 20


for i in range(6):
    square = canvas.create_rectangle(xtl, ytl, xbr, ybr, fill = "purple")
    xtl *= 2
    ytl *= 2
    xbr *= 2
    ybr *= 2


root.mainloop()
