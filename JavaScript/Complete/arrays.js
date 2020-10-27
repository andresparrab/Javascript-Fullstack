let grades = [12, 34, 56, 34, 67, 34, 56, 435, 67];

grades.length = 30;

console.log(grades);

grades.forEach(function (item, i, array) {
  console.log(item, i, array);
});
