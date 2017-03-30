# Write a recursive function that takes one parameter: n and adds numbers from 1 to n.

def sum_from_1_to_n(n):
    if n == 1:
        return n
    else:
        return n + sum_from_1_to_n(n - 1)

print(sum_from_1_to_n(6))
