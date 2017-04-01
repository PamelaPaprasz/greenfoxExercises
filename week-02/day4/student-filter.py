
students = [
        {'name': 'Rezso', 'age': 9.5, 'candies': 2},
        {'name': 'Gerzson', 'age': 10, 'candies': 1},
        {'name': 'Aurel', 'age': 7, 'candies': 3},
        {'name': 'Zsombor', 'age': 12, 'candies': 5}
]

def more_than(candy):

    y = ''
    for s in candy:
        if s['candies'] > 4:
            y = s['name']
            print(y)

more_than(students)

# create a function that takes a list of students and prints:
# - Who has got more candies than 4 candies

def avarage_candy(num_candy):

    all_candies = 0
    for i in num_candy:
        all_candies += i['candies']
    avarage = all_candies / len(students) #len is a must in order to get to know how many elements our list has
    return avarage

print(avarage_candy(students))

# create a function that takes a list of students and prints:
#  - how many candies they have on average
