from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

xtl = 10
ytl = 10
xbr = 20
ybr= 20

for i in range(19):

    square = canvas.create_rectangle(xtl, ytl, xbr, ybr, fill = "purple")

    xtl += 10
    ytl += 10
    xbr += 10
    ybr += 10


root.mainloop()
