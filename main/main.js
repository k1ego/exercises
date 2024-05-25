var singleNumber = function (nums) {
	let myMap = new Map()
	nums.forEach(el => {
		myMap.set(el, myMap.get(el) + 1 || 0)
	})
	let array = []
	let searchValue = 0
	for (let [key, value] of myMap.entries()) {
		if (value === searchValue) array.push(key)
	}
	return array.join(" ")
}
nums = [4, 1, 2, 1, 2, 5]
console.log(singleNumber(nums))