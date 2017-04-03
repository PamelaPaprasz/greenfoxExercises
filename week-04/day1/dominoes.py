class Domino(object):
    def __init__(self, value_a, value_b):
        self.values = [value_a, value_b]

    def __repr__(self):
        return '[{}, {}]'.format(self.values[0], self.values[1])

def initialize_dominoes():
    dominoes = []
    dominoes.append(Domino(5, 2))
    dominoes.append(Domino(2 ,4))
    dominoes.append(Domino(4, 6))
    dominoes.append(Domino(6, 7))
    dominoes.append(Domino(7, 1))
    dominoes.append(Domino(1, 5))
    return dominoes

dominoes = initialize_dominoes()

print(dominoes)
