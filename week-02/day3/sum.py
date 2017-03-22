# - Write a function called `sum` that sum all the numbers
#   until the given parameter


'''
this code only sum the elements of list called "a" up
a = [2, 6, 8, 9]
a = sum(a)
print(a)
'''

def ssum(all_to_given_number):
    for a in range(all_to_given_number):
        all_to_given_number = a + all_to_given_number
    print(all_to_given_number)

ssum(3)

'''
adding 1 before number in the for loop tells to the computer to start the counting from 1 instead of 0

def summ(number):
    for x in range(1,number):
        number = x + number
    print(number)

summ(5)
'''
