# Given a string, compute recursively a new string where all the
# adjacent chars are now separated by a "*".

def star_string(string):
    if string == '':
        return ''
    else:
        return '*' + string[0] + star_string(string[1:])

print(star_string('dobfqevvouqbouvb'))
