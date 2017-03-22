# - Create a variable named `am` and assign the value `kuty` to it
# - Write a function called `appendA` that gets a string as an input
#   and appends an 'a' character to its end
# - Print the result of `appendA(am)`

am = "kuty"

def appendA(am):

    am = am + "a"

    print(am)

appendA(am)


a = "macsk"

def real_append_fuction(ay):

    cut_cat = []
    for letter in ay:
        cut_cat.append(letter)
    print(cut_cat)
    cut_cat.append("a")
    print(cut_cat)
    macska = ''.join(cut_cat)
    print(macska)

real_append_fuction(a)
