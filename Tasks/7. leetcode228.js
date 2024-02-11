nums = [0, 1, 2, 4, 5, 7] // ["0->2","4->5","7"]
var summaryRanges = function (nums) {
	let result = []
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] + 1 === nums[i + 1]) {
			let firstRecent = nums[i].toString()
			while (nums[i] + 1 === nums[i + 1]) i++
			let secondRecent = nums[i].toString()
			result.push(firstRecent + '->' + secondRecent)
		} else result.push(nums[i].toString())
	}
	return result
};
