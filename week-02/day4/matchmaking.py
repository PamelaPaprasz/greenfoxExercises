# Join the two lists by matching one girl with one boy in the order list
# Exepected output: ["Eve", "Joe", "Ashley", "Fred"...]

girls = ["Eve","Ashley","Bözsi","Kat","Jane"]
boys = ["Joe","Fred","Béla","Todd","Neef","Jeff"]
order = [girls[0], boys[0], girls[1], boys[1], girls[2], boys[2], girls[3], boys[3], girls[4], boys[4] ]

order = ' , '.join(order)

print(order)
