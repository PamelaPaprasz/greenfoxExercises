from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

coloredBox1 = canvas.create_line(10, 50, 150, 50, fill="red")

coloredBox2 = canvas.create_line(150, 50, 150, 250, fill="green")

coloredBox3 = canvas.create_line(150, 250, 10, 250, fill="blue")

coloredBox4 = canvas.create_line(10, 250, 10, 50, fill="pink")
# draw a box that has different colored lines on each edge.

root.mainloop()
