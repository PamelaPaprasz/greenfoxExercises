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


number = int(input('Give me a number please: '))

for e in range(number):
    if e > 0 and e %2 == 1:
        print((number - e) * ' ', (e * '*'))
