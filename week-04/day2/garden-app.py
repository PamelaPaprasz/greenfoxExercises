'''
The task is to create a garden application, so in your main method you should create a garden with flowers and trees. The program should demonstrate an example garden with two flowers (yellow and blue) and two trees (purple and orange). In the example after creating them you should show the user, how the garden looks like. After that the program should water the garden twice, first with the amount of 40 then with 70. And after every watering the user should see the state of the garden as you can see in the output.

The Garden
is able to hold unlimited amount of flowers or trees
when watering it should only water those what needs water with equally divided amount amongst them
eg. watering with 40 and 4 of them need water then each gets watered with 10
The Flower
needs water if its current water amount is less then 5
when watering it the flower can only absorb the 75% of the water
eg. watering with 10 the flower's amount of water should only increase with 7.5
The Tree
needs water if its current water amount is less then 10
when watering it the tree can only absorb the 40% of the water
eg. watering with 10 the tree's amount of water should only increase with 4
'''

class Garden():

    flowers = []
    trees = []

    def watering(self, amount):

        self.amount = amount
        water_for_plants = amount / self.need_water()

        for flower in self.flowers:
            if flower[1] < 5:
                flower[1] += water_for_plants * 0.75

        for tree in self.trees:
            if tree[1] < 10:
                tree[1] += water_for_plants *0.4

        print('Watering with {}'.format(self.amount))

    def need_water(self):

        plants_need_water = 0

        for flower in self.flowers:
            if flower[1] < 5:
                plants_need_water += 1
                print('The {} flower needs water.'.format(flower[0]))
            else:
                print('The {} flower do not need water.'.format(flower[0]))

        for tree in self.trees:
            if tree[1] < 10:
                plants_need_water += 1
                print('The {} tree needs water.'.format(tree[0]))
            else:
                print('The {} tree do not need ater.'.format(tree[0]))

        return plants_need_water


class Flower(Garden):

    def __init__(self, color, current_water_amount = 0):
        self.color = color
        self.current_water_amount = current_water_amount
        self.flowers.append([self.color, self.current_water_amount])


class Tree(Garden):

    def __init__(self, color, current_water_amount = 0):
        self.color = color
        self.current_water_amount = current_water_amount
        self.trees.append([self.color, self.current_water_amount])


garden = Garden()
flower1 = Flower('blue')
flower2 = Flower('yellow')
tree1 = Tree('purple')
tree2 = Tree('orange')

garden.watering(40)
garden.watering(70)
garden.need_water()