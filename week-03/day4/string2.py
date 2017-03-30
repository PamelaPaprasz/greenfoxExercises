# Given a string, compute recursively a new string where all the 'x' chars have been removed.

def no_x(letters):
    if  letters == '':
        return ''

    if letters[0] == 'x':
        return '' + no_x(letters[1:])
    else:
        return letters[0] + no_x(letters[1:])

print(no_x('xpfnevn'))
