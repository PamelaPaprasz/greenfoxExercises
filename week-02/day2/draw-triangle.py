# Write a program that reads a number from the standard input, then draws a
# triangle like this:
#
# *
# **
# ***
# ****
#
# The triangle should have as many lines as the number was

number = int(input('Give me a number please: '))

for e in range(1, number +1):
    print(e * '*')
