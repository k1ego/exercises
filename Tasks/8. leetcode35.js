(nums = [1, 3, 5, 6]), (target = 5) // 2

var searchInsert = function (nums, target) {
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] === target || target < nums[i]) return i
		if (target > nums[i] && target > nums[i + 1]) continue
		if (target > nums[i] && target < nums[i + 1]) return i + 1
	}
	return nums.length
}
console.log(searchInsert(nums, target))
