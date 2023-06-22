//Complexity
//Time Complexity - O(n)
//Space Complexity - O(1)

function find132pattern(nums) {
    //Empty stack
  let stack = [];
  let s3 = -Infinity;
  //traversal over an array
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] < s3) return true;
    while (stack.length > 0 && stack[stack.length - 1] < nums[i]) {
      s3 = stack.pop();
    }
    stack.push(nums[i]);
  }
  return false;
}
//TO print
//Example -1
console.log(find132pattern([1, 2, 3, 4]));
//Example -2
console.log(find132pattern([3, 1, 4, 2]));
//Example -3
console.log(find132pattern([-1, 3, 2, 0]));
