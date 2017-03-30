# We have a number of bunnies and each bunny has two big floppy ears.
# We want to compute the total number of ears across all the bunnies recursively (without loops or multiplication).

def ears(bunny):
    if bunny == 0:
        return 0
    else:
        return 2 + ears(bunny - 1)

print(ears(90))
