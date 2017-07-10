// Create a function that takes a matrix (list of lists) of numbers and sums all the numbers.

function summMatrix(matrix) {
  // var list1 = matrix[0];
  // var list2 = matrix[1];
  var summAll = 0;

  // for (var i = 0; i < list1.length; i++){
  //   summAlll += list1[i]
  // }

  // for (var j = 0; j < list2.length; j++){
  //   summAlll += list2[j]
  // }

  for (var i = 0; i < matrix.length; i++){
    for (var j = 0; j < matrix[i].length; j++){
      summAll += matrix[i][j]
    }
  }
  return summAll;
}
console.log(summMatrix([[1, 2, 3], [5, 6], [1, 2, 3]]))