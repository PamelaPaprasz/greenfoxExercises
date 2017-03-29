from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

square = canvas.create_rectangle(30, 30, 20, 20, fill = "purple")
square = canvas.create_rectangle(40, 40, 30, 30, fill = "purple")
square = canvas.create_rectangle(50, 50, 40, 40, fill = "purple")
square = canvas.create_rectangle(60, 60, 50, 50, fill = "purple")
square = canvas.create_rectangle(70, 70, 60, 60, fill = "purple")
square = canvas.create_rectangle(80, 80, 70, 70, fill = "purple")
square = canvas.create_rectangle(90, 90, 80, 80, fill = "purple")
square = canvas.create_rectangle(100, 100, 90, 90, fill = "purple")
square = canvas.create_rectangle(110, 110, 100, 100, fill = "purple")
square = canvas.create_rectangle(120, 120, 110, 110, fill = "purple")


root.mainloop()
