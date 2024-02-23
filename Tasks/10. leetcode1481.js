// https://leetcode.com/problems/least-number-of-unique-integers-after-k-removals/description/
// Задача 1481 с удалением чисел, которых меньше всех
let arr = [4, 3, 1, 1, 3, 3, 2 ]
let k = 3
var findLeastNumOfUniqueInts = function (arr, k) {
	let myMap = new Map()
	arr.forEach(num => {
		myMap.set(num, myMap.get(num) + 1 || 0)
	})
	let sortedMap = Array.from(myMap).sort((a, b) => a[1] - b[1])

	for (let i = 0; i < k; i++){
		if (sortedMap[0][1] !== 0) sortedMap[0][1]--
		else sortedMap.splice(0, 1)
    }
	return sortedMap.length;
};
console.log(findLeastNumOfUniqueInts(arr, k))
