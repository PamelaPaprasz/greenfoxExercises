# Write a recursive function that takes one parameter: n and counts down from n.

def count_down(number):
    if number  == 1: #base case
        return 1
    else:
        print (number)
        return count_down(number -1)

print(count_down(5))
