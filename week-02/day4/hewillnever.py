# Things are a little bit messed up
# Your job is to decode the notSoCrypticMessage by using the hashmap as a look up table
# Assemble the fragments into the out variable

out = ""

notSoCrypticMessage = [1, 12, 1, 2, 11, 1, 7, 11, 1, 49, 1, 3, 11, 1, 50, 11]

hashmap = [
    {7: "run around and desert you"},
    {50: "tell a lie and hurt you"},
    {49: "make you cry,"},
    {2: "let you down"},
    {12: "give you up,"},
    {1: "Never gonna"},
    {11: "\n"},
    {3: "say goodbye"}
]

for i in notSoCrypticMessage: #here you pick an element up from the notSoCrypticMessage
    for a in hashmap: #here you have this element from the notSoCrypticMessage and go through the elements of the hashmap but here we know only the list indexes of the hashmap
        for k, v in a.items(): # here you go inside to each of the dictionaries and look through the elements using a.items()
            if i == k: # and if you find that the element from notSoCrypticMessage is equal to the key value of one of the dictionaries
                out += v #you give the value of the matching key to the out variable

print(out)
