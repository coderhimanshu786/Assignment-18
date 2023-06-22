//Complexity
//Time Complexity - O(n)
//Space Complexity - O(1)

function lengthOfLIS(nums) {
  const len = nums.length;
  if (len == 1) return 1;

  const arr = [];
  arr.push(nums[0]);

  for (let i = 0; i < len; i++) {
    if (arr.at(-1) < nums[i]) {
      arr.push(nums[i]);
    } else {
      for (let j = 0; j < arr.length; j++) {
        if (arr[j] >= nums[i]) {
          arr[j] = nums[i];
          break;
        }
      }
    }
  }
  return arr.length;
}
//Print
//Example - 1
console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));
//Example - 2
console.log(lengthOfLIS([0, 1, 0, 3, 2, 3]));
//Example - 3
console.log(lengthOfLIS([7, 7, 7, 7, 7, 7, 7]));
