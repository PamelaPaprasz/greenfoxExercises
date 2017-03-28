# Create a method that decrypts the texts/duplicated_chars.txt

def decrypt(file):
    text1 = open(file).read()

    for i in text1:
        text2 = text1[::2]
    print(text2)
    text1.close()

user_input = input()
decrypt(user_input)
