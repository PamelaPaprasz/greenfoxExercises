# Write a program that reads a number from the standard input, then draws a
# pyramid like this:
#
#
#    *
#   ***
#  *****
# *******
#
# The pyramid should have as many lines as the number was

number = str(input('Give me a number please: '))

for e in range(0, 8):
    if e > 0 and e %2 == 1:
        print(' ', e * number)
