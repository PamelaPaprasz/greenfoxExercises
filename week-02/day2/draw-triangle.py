# Write a program that reads a number from the standard input, then draws a
# triangle like this:
#
# *
# **
# ***
# ****
#
# The triangle should have as many lines as the number was

number = input('Give me a number please: ')

for e in range(0, 5):
    print(e * number)
