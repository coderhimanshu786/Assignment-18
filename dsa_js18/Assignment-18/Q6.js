//Complexity
//Time Complexity - O(n)
//Space Complexity - O(1)

function findMinArrowShots(points) {
  points.sort((a, b) => a[1] - b[1]);
  let count = 1,
    pos = points[0][1];
  for (let i = 1; i < points.length; i++) {
    if (pos >= points[i][0]) {
      continue;
    }
    count++;
    pos = points[i][1];
  }
  return count;
}
//Print
//Example - 1
console.log(
  findMinArrowShots([
    [10, 16],
    [2, 8],
    [1, 6],
    [7, 12],
  ])
);
//Example - 2
console.log(
  findMinArrowShots([
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8],
  ])
);
//Example - 3
console.log(
  findMinArrowShots([
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5],
  ])
);
