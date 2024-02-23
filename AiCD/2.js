let n = 5
let nums = [1, 2, 1, 2, 3]
function dress(n, nums) {
	let result = []
	let mySet = new Set()
	nums.forEach(el => {
		if (mySet.has(el)) result.push(0)
		else {
			mySet.add(el)
			result.push(1)
		}
	})
	if (result.length !== n) return 'wrong quantity'
	else return result.join().replace(/,/g, ' ')
}
console.log(dress(n, nums))
