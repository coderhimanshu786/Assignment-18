//Complexity
//Time Complexity - O(logn)
//Space Complexity - O(1) beacuse it use a constant space

function isBadVersion(version) {
  // Implementation of the isBadVersion API
  // This function should return true if the version is bad, and false otherwise
  return version >= 4;
}

function firstBadVersion(n) {
  let left = 1;
  let right = n;

  while (left < right) {
    const mid = Math.floor(left + (right - left) / 2);
    if (isBadVersion(mid)) {
      console.log("call isBadVersion(" + mid + ") -> true");
      right = mid;
    } else {
      console.log("call isBadVersion(" + mid + ") -> false");
      left = mid + 1;
    }
  }

  // At this point, left and right both point to the first bad version
  return left;
}
//Example - 1
console.log("First bad version:", isBadVersion(5));
//Example - 2
console.log("First bad version:", isBadVersion(1));
