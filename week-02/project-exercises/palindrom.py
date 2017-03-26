
user_word = input('Give me a word that I can palindromize for you: ')

def palindrom_creator(word):
    user_word = word
    if len(user_word) > 1:
        user_word2 = user_word[::-1]
        user_word2 = user_word2[1:]
        user_word += user_word2
    else:
        print('I can not reverse a letter, sorry, your choice was not long enough!')

    return user_word

print(palindrom_creator(user_word))
