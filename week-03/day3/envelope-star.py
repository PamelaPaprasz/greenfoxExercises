from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

# reproduce this:
# [https://github.com/greenfox-academy/teaching-materials/blob/master/exercises/drawing/envelope-star/r2.png]
'''
for i in range(0, 151, 10):

    canvas.create_line(i + 150, 150, 150, i)
    canvas.create_line(150, i +150, i, 150)
    canvas.create_line(150, i + 150, 300 - i, 150)
    canvas.create_line(150, i, 150-i, 150)

'''
canvas.create_line(150, 150, 300, 150)
canvas.create_line(150, 160, 290, 150)
canvas.create_line(150, 170, 280, 150)
canvas.create_line(150, 190, 260, 150)
canvas.create_line(150, 250, 200, 150)
canvas.create_line(150, 280, 170, 150)
canvas.create_line(150, 290, 160, 150)
canvas.create_line(150, 300, 150, 150)


root.mainloop()
