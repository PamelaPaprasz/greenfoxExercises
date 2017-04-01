
# I would like to replace "dishwasher" with "galaxy" in this example
# Please fix it for me!
# Expected ouput: In a galaxy far far away

e = 'In a dishwasher far far away'

words = e.split()
words[2] = 'galaxy'
e = ' '.join(words)
print(e)
