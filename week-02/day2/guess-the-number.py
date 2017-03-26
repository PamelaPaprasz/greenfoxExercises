'''
// Write a program that stores a number, and the user has to figure it out.
// The user can input guesses, after each guess the program would tell one
// of the following:
//
// The stored number is higher
// The stried number is lower
// You found the number: 8

'''
print('There is a number on my mind between 0 and 100! Try to guess: ')

x = int(input())

my_number = 27

while x != my_number:
    if x < my_number:
        print('The stored number is higher.')
        x = int(input('Try again: '))
    elif x > my_number:
        print('The stroed number is lower.')
        x = int(input('Try again: '))

print('You found the number: ', my_number)
