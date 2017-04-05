'''
Create a class, with one method (eg. get_apple()) that returns a string (eg. "apple")
Create a test for that:
Create a test class
Create a test method
Instantiate an Object from your class in the method
Use the assertEquals()
The expected parameter should be the same string (eg. "apple")
The actual parameter should be the return value of the method (eg. myobject.get_apple())
Run the test
Change the expected value to make the test failing
Run the test
Fix the returned value to make the test succeeding again

Create a sum method in your class which has a list of integers as parameter
It should return the sum of the elements in the list
Follow these steps:
Add a new test case
Instantiate your class
create a list of integers
use the assertEquals to test the result of the created sum method
Run it
Create different tests where you
test your method with an empyt list
with a list with one element in it
with multiple elements in it
with a null
Run them
Fix your code if needed
'''

class Apple():

    def __init__(self):
        self.fruit_type = 'apple'

    def get_apple(self):
        return self.fruit_type

    def sum(self, the_list = []):
        count = 0
        for i in the_list:
            count += i
        return count



apple = Apple()
apple.get_apple()
print(apple.fruit_type)
print(apple.sum([2, 5, 6, 7]))
