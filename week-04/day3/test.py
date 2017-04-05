import unittest

from work import Apple

class testApple(unittest.TestCase):
    def test_get_apple(self):
        apple = Apple()
        apple.get_apple()
        self.assertEqual(apple.get_apple(), apple.fruit_type)

    def test_sum_list(self):
        apple = Apple()
        self.assertEqual(apple.sum([2, 5]), 7)

    def test_sum_empty_list(self):
        apple = Apple()
        self.assertEqual(apple.sum([]), 0)

    def test_sum_empty_list(self):
        apple = Apple()
        self.assertEqual(apple.sum([]), 0)

    def test_sum_one_element_list(self):
        apple = Apple()
        self.assertEqual(apple.sum([4]), 4)

if __name__ == '__main__':
    unittest.main()
