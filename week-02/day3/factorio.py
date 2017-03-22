# - Create a function called `factorio`
#   that returns it's input's factorial


# without 1 in the for loop this function wont work because anything multiplied by zero remains zero

def factorio(all_to_given_number):
    for a in range(1, all_to_given_number):
        all_to_given_number = a * all_to_given_number
    print(all_to_given_number)

factorio(3)
