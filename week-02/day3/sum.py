# - Write a function called `sum` that sum all the numbers
#   until the given parameter


'''
this code only sum the elements of list called "a" up
a = [2, 6, 8, 9]
a = sum(a)
print(a)
'''

def ssum(number):
    for a in range(number):
        number = a + number
    print(number)

ssum(3)

'''

function version where the number variable is out of the function => it will work always with 5 so we can not give any  other value to n in our function... this problem can be solved by changing n to number so our for loop will work with the number given after print sum because it will think that the two number variables are two differet thing

number = 5

def sum(n)
    out = 0
    for i in range(1, n + 1):
        out += i
    return out

print(sum(number))

number = 5
out = 0

for i in range(1, number + 1):
    out +=i

print(out)


adding 1 before number in the for loop tells to the computer to start the counting from 1 instead of 0

def summ(number):
    for x in range(1,number):
        number = x + number
    print(number)

summ(5)
'''
