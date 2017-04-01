# Things are a little bit messed up
# Your job is to decode the notSoCrypticMessage by using the hashmap as a look up table
# Assemble the fragments into the out variable

out = "";
notSoCrypticMessage = [1, 12, 1, 2, 11, 1, 7, 11, 1, 49, 1, 3, 11, 1, 50, 11]

hashmap = {
    7: "run around and desert you",
    50: "tell a lie and hurt you",
    49: "make you cry,",
    2: "let you down",
    12: "give you up,",
    1: "Never gonna",
    11: "\n",
    3: "say goodbye"
}

for i in notSoCrypticMessage:
    out += hashmap[i]
    
'''
    hashmap[i] works because all the elements in the notSoCrypticMessage variable (that is a list) are included in the hashmap dictionary and we can not loop through the hashmap dictionary because the elements in a dictionary have no index values like a list has but we can find if there is a match with the actual inth elements and if is we add it to the out variable
'''

print(out)
