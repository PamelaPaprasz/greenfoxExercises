from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

offset = 0
size = 10


for i in range(19):
    square = canvas.create_rectangle(offset, offset, size + offset, size + offset, fill = "purple")
    offset += 10

root.mainloop()
