//Complexity
//Time Complexity - O(n)
//Space Complexity - O(1)

function containsDuplicate(nums){
    return new Set(nums).size != nums.length;
};
//Print 
//Example-1
console.log(containsDuplicate([1,2,3,1]));
//Example-2
console.log(containsDuplicate([1,2,3,4]));
//Example-3
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]));