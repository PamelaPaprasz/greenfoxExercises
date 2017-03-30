# Write a recursive function that takes one parameter: n and counts down from n.

def count_to_zero(number):
    if number  == 0: #base case
        return 0
    else:
        print (number)
        return count_to_zero(number -1)

print(count_to_zero(5))
