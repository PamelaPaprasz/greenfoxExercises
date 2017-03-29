from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

# divide the canvas into 4 equal parts
# and repeat this pattern in each quarter:
# [https://github.com/greenfox-academy/teaching-materials/blob/master/exercises/drawing/line-play/r1.png]
for i in range(0, 151, 10):
    canvas.create_line(i, 0, 150, i)
    canvas.create_line(0, i, i, 150)
    canvas.create_line(i + 150, 150, 300, i + 150)
    canvas.create_line(150, 150 + i, 150 + i, 300)
    canvas.create_line(i + 150, 150, 150, i)
    canvas.create_line(150, i +150, i, 150)
    canvas.create_line(i +150, 0, 300, i)
    canvas.create_line(0, 150 + i, i, 300)

root.mainloop()
