# Create a method that decrypts texts/reversed_zen_lines.txt

def decrypt(file_name):

    text = open(file_name).read()
    print(text[::-1])
    return text[::-1]
    
decrypt('reversed-lines.txt')
