// Create a function that takes a matrix (list of lists) of numbers and sums all the numbers.

function summMatrix(matrix) {
  var list1 = matrix[0];
  var list2 = matrix[1];
  var summAll = [];
  var summAlll = 0;

  for (var i = 0; i < list1.length; i++){
    summAll.push(list1[i])
    summAlll += list1[i]
  }

  for (var j = 0; j < list2.length; j++){
    summAll.push(list2[j])
    summAlll += list2[j]
  }
  return summAlll;

}

console.log(summMatrix([[1, 2, 3], [5, 6]]))