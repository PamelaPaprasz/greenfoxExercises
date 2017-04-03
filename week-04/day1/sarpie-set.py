'''
Reuse your Sharpie class
Create SharpieSet class
it contains a list of Sharpie
count_usable() -> sharpie is usable if it has ink in it
remove_trash() -> removes all unusable sharpies
'''

class Sharpie():

    def __init__(self, color, width, ink_amount):
        self.color = color
        self.width = float(width)
        self.ink_amount = float(ink_amount)


class SharpieSet():

    def __init__(self, sharpie):
        self.sharpie = sharpie
        print(self.sharpie[0].color)

    def count_usable(self):
        for i in self.sharpie:
            if self.sharpie[2].ink_amount > 0:
                print('Sharpie is usable')



    #def remove_trash(self):


sharpie1 = Sharpie('green', 54.0, 0.0)
sharpie2 = Sharpie('blue', 53.0, 20.0)
set1 = SharpieSet([sharpie1, sharpie2])
