from tkinter import *

root = Tk()

canvas = Canvas(root, width='800', height='800')
canvas.pack()

canvas.create_oval(200, 200, 100, 100, fill = 'black', outline = 'black')
#canvas.create_oval(200, 200, 150, 150, fill = 'black', outline = 'black')
#canvas.create_oval(300, 300, 170, 170, fill = 'black', outline = 'black')
#canvas.create_oval(500, 500, 0, 0, fill = 'black', outline = 'black')
#canvas.create_oval(100, 100, 70, 70, fill = 'black', outline = 'black')
canvas.create_line(420, 400, 600, 600, fill = 'blue', width = 5)
canvas.create_line(420, 400, 500, 600, fill = 'indigo', width = 5)
canvas.create_line(420, 400, 400, 600, fill = 'violet', width = 5)
canvas.create_line(420, 400, 700, 600, fill = 'green', width = 5)
canvas.create_line(420, 400, 600, 300, fill = 'red', width = 6)
canvas.create_line(420, 400, 600, 400, fill = 'orange', width = 5)
canvas.create_line(420, 400, 700, 500, fill = 'yellow', width = 5)
canvas.create_line(0, 0, 300, 100, fill = 'black', width = 10)
canvas.create_line(0, 0, 100, 300, fill = 'black', width = 10)
canvas.create_line(300, 100, 400, 50, fill = 'black', width = 10)
canvas.create_line(100, 300, 50, 400, fill = 'black', width = 10)
canvas.create_line(50, 400, 150, 300, fill = 'black', width = 10)
canvas.create_line(400, 50, 300, 150, fill = 'black', width = 10)
canvas.create_line(150, 300, 200, 600, fill = 'black', width = 10)
canvas.create_line(300, 150, 600, 200, fill = 'black', width = 10)
canvas.create_line(600, 200, 200, 600, fill = 'black', width = 10)



root.mainloop()
