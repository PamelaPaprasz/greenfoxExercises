# Create a method that decrypts texts/reversed_zen_order.txt

def decrypt(file_name):
    text = open(file_name).readlines()
    return text[::-1]

print(decrypt('reversed-order.txt'))
