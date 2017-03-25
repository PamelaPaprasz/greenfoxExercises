# Join the two lists by matching one girl with one boy in the order list
# Exepected output: ["Eve", "Joe", "Ashley", "Fred"...]

#ujra ;s majd v

girls = ["Eve","Ashley","Bözsi","Kat","Jane"]
boys = ["Joe","Fred","Béla","Todd","Neef","Jeff"]

merged_list = []
turn_intiger = len(girls)

for i in range(turn_intiger):
    merged_list += [girls[i]]
    merged_list += [boys[i]]
    
merged_list.append(boys[5])

print(merged_list)
