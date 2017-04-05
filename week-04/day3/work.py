
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

    def anagram(self, str1, str2):
        self.str1 = str1
        self.str2 = str2

        list_str1 = list(str1)
        list_str2 = list(str2)
        list_str1.sort()
        list_str2.sort()

        if list_str1 == list_str2:
            return True
        else:
            return False



apple = Apple()
apple.get_apple()
print(apple.fruit_type)
print(apple.sum([2, 5, 6, 7]))
print(apple.anagram('dad', 'bad'))
