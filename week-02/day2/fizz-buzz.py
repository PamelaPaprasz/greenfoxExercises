# Write a program that prints the numbers from 1 to 100.
# But for multiples of three print “Fizz” instead of the number
# and for the multiples of five print “Buzz”.
# For numbers which are multiples of both three and five print “FizzBuzz”.

for e in range(1, 101):
    if e % 3 == 0 and  e % 5 != 0:
        print('Fizz')
    elif e % 5 == 0 and e % 3 != 0:
        print('Buzz')
    elif e % 3 == 0 and e % 5 == 0:
        print('FizzBuzz')
    else:
        print(e)
