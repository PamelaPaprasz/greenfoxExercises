
students = [
        {'name': 'Teodor', 'age': 3, 'candies': 2},
        {'name': 'Rezso', 'age': 9.5, 'candies': 2},
        {'name': 'Zsombor', 'age': 12, 'candies': 5},
        {'name': 'Aurel', 'age': 7, 'candies': 3},
        {'name': 'Olaf', 'age': 12, 'candies': 7},
        {'name': 'Gerzson', 'age': 10, 'candies': 1},
]


def ins_dict(student_attribut):

    all_candy = 0

    for elements in student_attribut:
        all_candy += elements['candies']
    print(all_candy)

ins_dict(students)



# create a function that takes a list of students and prints:
# - how many candies are owned by students

def candies(candy_age):
    sum_age = 0
    for elements in candy_age:
        if elements['candies'] < 5:
            sum_age += elements['age']
    return(sum_age)

sumed_up_ages = candies(students)
print(sumed_up_ages)

# create a function that takes a list of students and prints:
# - Sum of the age of people who have lass than 5 candies
