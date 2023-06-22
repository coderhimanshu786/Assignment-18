//Complexity
//Time Complexity - O(n)
//Space Complexity - O(1)

const maximumGap = (n) => {
  let maxGap = 0;
  if (n.length === 1 || n.length === 0) return 0;
  n.sort((a, b) => a - b);

  for (let i = 0; i < n.length; i++) {
    let gap = n[i + 1] - n[i];
    if (gap > maxGap) maxGap = gap;
  }

  return maxGap;
};
//Print 
//Example -1
console.log(maximumGap([3, 6, 9, 1]));
//Example -2
console.log(maximumGap([10]));