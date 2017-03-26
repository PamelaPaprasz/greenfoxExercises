'''Create a function named is anagram following your current language's style guide. It should take two strings and return a boolean value depending on whether its an anagram or not.
'''
x = input("first word: ")

y = input("second word: ")

def anagram(word1, word2):

    for i in word1:
        if i in word2:
            return True
        else:
            return False

print('These words are anagrams: ', anagram(x, y))
