# Create a method that decrypts texts/reversed_zen_lines.txt

def decrypt(file_name):

    text = open(file_name).readlines()

    reversed_version = ''

    for i in text:
        i = i[::-1]
        reversed_version += i
    return reversed_version

print(decrypt('reversed-lines.txt'))
