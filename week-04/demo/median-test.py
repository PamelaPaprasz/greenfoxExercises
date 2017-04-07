import unittest
import median

class TestMedian(unittest.TestCase):
    def setUp(self):
        pass

    def test_median_four(self):
        self.assertEqual(median.median([7,5,3,5]), 5)

    def test_median_five(self):
        self.assertEqual(median.median([1,2,3,4,5]), 3)
        
if __name__ == '__main__':
    unittest.main()