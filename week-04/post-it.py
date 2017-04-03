class PostIt():
    def __init__(self, backgroundColor, text, textColor):
        self.backgroundColor = backgroundColor
        self.text = text
        self.textColor = textColor

post_it_1 = PostIt("orange", "Idea1", "blue")
post_it_2 = PostIt("pink", "Awsome", "black")
post_it_3 = PostIt("yellow", "Superb!", "green")

print (post_it_1.backgroundColor, post_it_1.text, post_it_1.textColor)
