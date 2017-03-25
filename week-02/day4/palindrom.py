
user_word = input('Enter the word here so I can palindromize it for you: ')

def palindrom_creator(word):
    user_word = word
    user_word2 = user_word[::-1]
    user_word2 = user_word2[1:]
    user_word += user_word2
    return user_word

print(palindrom_creator(user_word))
