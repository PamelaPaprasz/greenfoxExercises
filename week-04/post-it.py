class PostIt:
    background_color = ''
    text = ''
    text_color = ''

post_it_1 = PostIt()
post_it_2 = PostIt()
post_it_3 = PostIt()

post_it_1.background_color = 'orange'
post_it_1.text = 'Idea1'
post_it_1.text_color = 'blue'

post_it_2.background_color = 'pink'
post_it_2.text = 'Awesome'
post_it_2.text_color = 'black'

post_it_3.background_color = 'yellow'
post_it_3.text = 'Superb!'
post_it_3.text_color = 'green'

print ('Backgroundcolor of this post it is ' + post_it_1.background_color + ', the text on it is ' + post_it_1.text + ' and the color of the text is ' +  post_it_1.text_color)
