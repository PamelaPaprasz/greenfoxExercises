# create a function that takes a number,
# divides ten with it,
# and prints the result.
# it should print "fail" if the parameter is 0

def divide(number):
    if number > 0:
        print(10/number)
    else:
        print('fail')

divide(9)
