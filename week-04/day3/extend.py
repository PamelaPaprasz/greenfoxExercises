# Adds a and b, returns as result
def add(a, b):
    return a + b

# Returns the highest value from the three given params
def max_of_three(a, b, c):
    maximum = 0
    for i in (a, b, c):
        while i > maximum:
            maximum = i
    return maximum

# Returns the median value of a list given as param
def median(pool):

    pool.sort()

    if len(pool) % 2 != 0:
        return pool[len(pool) // 2]

    elif len(pool) % 2 == 0:
        return (pool[(len(pool) // 2)] + pool[(len(pool) // 2)-1]) // 2

# Returns true if the param is a vovel
def is_vovel(char):

    char1 = list(char)
    char1.sort()
    if char1[0] == 'a' or 'e' or 'i' or 'o' or 'u':
        return True
    else:
        return False

# Create a method that translates hungarian into the teve language
def translate(hungarian):
    teve = hungarian
    for char in teve:
        if is_vovel(char):
            teve = (char+'v'+char).join(teve.split(char))
    return teve
