from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

greenDiagonalLine = canvas.create_line(0, 0, 300, 300, fill ="green")
# draw the canvas' diagonals in green.

root.mainloop()
