# Create a method that decrypts texts/reversed_zen_order.txt
'''
def decrypt(file_name):
    text = open(file_name).readlines()
    return text[::-1]

print(decrypt('reversed-order.txt'))
'''

def decrypt(file_name):
    look_like_text = ''
    text = open(file_name).readlines()
    text2 = text[::-1]
    join_version = look_like_text.join(text2)
    return join_version
    close(text)

print(decrypt('reversed-order.txt'))
