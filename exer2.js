/*2 - Sorted Squared Array
Write a function that takes in a non-empty array of integers that are sorted in ascending order and returns a new array of the same length with the squares of the original integers also sorted in ascending order.*/

sortedSquared([1, 2, 3, 5, 6, 8, 9]);
sortedSquared([-2, -1]);
sortedSquared([-10, -5, 0, 5, 10]);

function sortedSquared(arr){
  let len = arr.length;
  // elevar al cuadrado cada valor
  for(var i = 0; i < len; i++){
    arr[i] = arr[i] * arr[i];
  }
  arr = arr.sort((a, b) => a - b);
  console.log(arr);
}
