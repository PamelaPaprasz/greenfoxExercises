# Create a method that decrypts texts/encoded_zen_lines.txt

def decrypt(ciphertext):

    result = ''
    text = open(ciphertext).read()

    for i in text:
        if i == '\n':
            result += '\n'
        elif i == ' ':
            result += i
        else:
            i = ord(i) -1
            i = chr(i)
            result += i
    return result

print(decrypt('encoded-lines.txt'))
