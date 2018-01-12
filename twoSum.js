/*
brute force implementation
let twoSum = function(nums, target) {
   if(!Array.isArray(nums)){return 'invalid input'}
    for(var i =0; i < nums.length; i++) {
      for(var j = i + 1; j < nums.length; j++) {
        if(nums[i] + nums[j] === target && nums[i] !== nums[j]) {
          return [i, j]
        }
      }
    }
    return false;
};
*/

//hash table lookup
let twoSum = function(nums, target) {
  if (!Array.isArray(nums)) { return 'invalid input'; }
  let obj = {};
  nums.forEach((el, i)=> obj[el] = i);
  for (let i = 0; i < nums.length; i++) {
    if (obj[target - nums[i]]) {
      return [i, obj[target - nums[i]]];
    }
  }
  return false;
};


let nums = [100, 20, 5, 1000, 700, 300];
let target = 1300;
twoSum(nums, target);