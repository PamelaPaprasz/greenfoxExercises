# Create a method that decrypts the texts/duplicated_chars.txt

def decrypt(file):
    text1 = open(file, "r")
    text2 = text1.read()
    print(text2)
    text1.close()

user_input = input()
decrypt(user_input)
