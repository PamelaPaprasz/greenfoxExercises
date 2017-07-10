// Create a function that takes a matrix (list of lists) of numbers and sums all the numbers.

function summMatrix(matrix) {
  var summAll = 0;

  for (var i = 0; i < matrix.length; i++){
    for (var j = 0; j < matrix[i].length; j++){
      summAll += matrix[i][j]
    }
  }
  return summAll;
}
console.log(summMatrix([[1, 2, 3], [5, 6], [1, 2, 3]]))