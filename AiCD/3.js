let money = 20
let quantityStore = 3
let notebooks = [
	[1, 3],
	[4, 5],
	[6, 7],
]

let result = 0
let myMap = new Map(notebooks)
function maxNote(money) {
	let keysIterator = myMap.keys()
	let buff = 0
	let quantity = 0
	let minPrice = 1_000_000
	for (let key of keysIterator) {
		if (key < minPrice) {
			minPrice = key
			quantity = myMap.get(key)
		}
	}
	for (let k = 1; k <= quantity; k++) {
		buff = minPrice * k
		if (minPrice > money) {
			break
		} else {
			result++
			money -= minPrice
			if (k === quantity) {
				myMap.delete(minPrice)
				maxNote(money)
			}
		}
	}
	return result
}
console.log(maxNote(money, quantityStore, notebooks))
