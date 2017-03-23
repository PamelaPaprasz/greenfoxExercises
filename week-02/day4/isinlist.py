
# Check if list contains all of the following elements: 4,8,12,16
# Create a function that accepts listOfNumbers as an input
# it should return "true" if it contains all, otherwise print "false"

listOfNumbers = [2, 4, 6, 8, 10, 12, 14, 16]

a = [4,8,12,16]

def check_num(listOfNumbers):

    for number in a:
        if number not in listOfNumbers:
            return False

    return True

check_num(listOfNumbers)

print(check_num(listOfNumbers))
