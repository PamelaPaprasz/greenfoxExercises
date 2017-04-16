import time
from tkinter import *

root = Tk()

canvas = Canvas(root, width='640', height='640')
canvas.pack()

for i in range(8):
    for e in range(8):
        time.sleep(0.1)
        if (e+i) %2 == 0:
            canvas.create_rectangle(0 + 80*e, 0 + 80*i, 160 + 160*e, 160 + 160*i, fill = 'white')
        else:
            canvas.create_rectangle(0 + 80*e, 0 + 80*i, 160 + 160*e, 160 + 160*i, fill = 'black')
        canvas.update()

root.mainloop()
