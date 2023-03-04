var twoSum = function(nums, target) {
  let res = []
  for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
          if (nums[i] + nums[j] === target) {
              res.push(i,j)
              break
          }
      }
      if (res.length === 2) break
  }
  return res
};

const nums = [1,5,4,7,8,0,32,8,6]
const target = 40

const RES = twoSum(nums, target)
console.log(nums[RES[0]], nums[RES[1]])
console.log(RES)