function dress(k, n, m) {
	let buff = 0
	for (let i = 0; i < n + 1; i++) {
		for (let j = 0; j < m + 1; j++) buff++
	}
	if (buff >= k) return 'Yes'
	else return 'No'
}
