//Complexity
//Time Complexity - O(n)
//Space Complexity - O(1)

function merge(intervals) {
  if (!intervals.length) return intervals;
  intervals.sort((a, b) => a[0] - b[0]);
  const result = [intervals[0]];

  for (let index = 1; index < intervals.length; index++) {
    if (intervals[index][0] <= result[result.length - 1][1]) {
      result[result.length - 1][1] = Math.max(
        intervals[index][1],
        result[result.length - 1][1]
      );
    } else {
      result.push(intervals[index]);
    }
  }
  return result;
}
//Print
//Example - 1
console.log(
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ], "</br>")
);
//Example -2 
console.log(merge([[1,4],[4,5]]));