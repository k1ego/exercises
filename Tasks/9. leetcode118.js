var generate = function (numRows) {
	let result = []
	if (numRows === 0) return result
	for (let i = 0; i < numRows; i++) {
		// (i + 1) - означает, что в первом вложенном цикле будет лежать 1 элемент, тк i = 0
		let innerArray = new Array(i + 1).fill(1)
		for (let j = 1; j < i; j++) {
			innerArray[j] = result[i - 1][j] + result[i - 1][j - 1]
		}
		result.push(innerArray)
	}
	return result
}
