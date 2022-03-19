const matrix = [
  [1.123, 2.123, 3.123],
  [4.123, 5.123, 6.123],
  [7.123, 8.123, 9.123]
]

matrix.map((lists) => {
  lists.map((numbers) => {
    matrix[matrix.indexOf(lists)][lists.indexOf(numbers)] = Number(numbers.toFixed(2));
  });
});
console.log(matrix);
