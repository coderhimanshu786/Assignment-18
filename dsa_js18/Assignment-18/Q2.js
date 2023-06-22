//Complexity
//Time Complexity - O(n)
//Space Complexity - O(1)

function sortColors(nums) {
  let zero = 0,
    one = 0,
    two = 0;
  for (let n of nums) {
    n === 0 ? zero++ : n === 1 ? one++ : two++;
  }
  for (let i = 0; i < nums.length; i++) {
    i < zero ? (nums[i] = 0) : i < zero + one ? (nums[i] = 1) : (nums[i] = 2);
  }
  return nums;
};
//Print
//Example - 1
console.log(sortColors([2, 0, 2, 1, 1, 0]));
//Example - 2
console.log(sortColors([2,0,1]));
