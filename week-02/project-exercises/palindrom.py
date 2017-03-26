def palindrome_creator(word):
    if len(word) > 1:
        word_reversed = word[::-1]
        word_reversed = word_reversed[1:]
        palindrome = word + word_reversed
    else:
        return False
    return palindrome

user_word = input('Give me a word that I can palindromize for you: ')
result = palindrome_creator(user_word)
if(result!=False):
    print (result)
else:
    print ('Sorry!')
