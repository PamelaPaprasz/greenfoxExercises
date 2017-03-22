# - Create a function called `factorio`
#   that returns it's input's factorial

number = 5

def factorio(n):

    while number >= 1:
        number = number * n
        n = number - 1
    return number

    factorio(n)
