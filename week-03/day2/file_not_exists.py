
# write a function that takes a filename and returns the number of lines the
# file contains. It should return zero if the file does not exist.

def count_all_lines(file):

    try:
        text = open(file, 'r')
        text1 = text.readlines()
        text.close()
        return len(text1)
    except FileNotFoundError:
        return 0

print(count_all_lines('reversed-lines.txt'))
