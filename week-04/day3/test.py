import unittest

from work import Apple

class testApple(unittest.TestCase):
    def test_get_apple(self):
        apple = Apple()
        self.assertEqual(apple.get_apple(), apple.fruit_type)

    def test_sum_list(self):
        apple = Apple()
        self.assertEqual(apple.sum([2, 5]), 7)

    def test_sum_empty_list(self):
        apple = Apple()
        self.assertEqual(apple.sum([]), 0)

    def test_sum_one_element_list(self):
        apple = Apple()
        self.assertEqual(apple.sum([4]), 4)

    def test_anagram(self):
        apple = Apple()
        self.assertEqual(apple.anagram('dad', 'dad'), True)

    def test_count_letter(self):
        apple = Apple()
        self.assertEqual(apple.count_letters('apple'), {'a':1, 'p':2, 'l':1, 'e':1})

if __name__ == '__main__':
    unittest.main()
