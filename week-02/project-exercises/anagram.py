'''Create a function named is anagram following your current language's style guide. It should take two strings and return a boolean value depending on whether its an anagram or not.
'''

'''
x = input("first word: ")

y = input("second word: ")

def anagram(word1, word2):

    word1 = list(word1)
    word2 = list(word2)

    abc_order_word1 = word1.sort()
    abc_order_word2 = word2.sort()

    if abc_order_word1 == abc_order_word2:
        return True
    else:
        return False

print('These words are anagrams: ', anagram(x, y))

'''

x = input("first word: ")

y = input("second word: ")

def anagram(word1, word2):

    word1 = list(word1)
    word1.sort()

    word2 = list(word2)
    word2.sort()

    if word1 == word2:
        return True
    else:
        return False

print('These words are anagrams: ', anagram(x, y))
