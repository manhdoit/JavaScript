/*==== Sorted Union ====*/
function uniteUnique(...arr) {
	let newArr = [...arr]
	return newArr;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));


/*==== Missing letters ====*/

function fearNotLetter(str) {
	const newArr = str.split('').map(elem => elem.charCodeAt());
	for (i = 1; i < newArr.length; i++) {
		if (newArr[i] - newArr[i - 1] != 1) {
				return String.fromCharCode(newArr[i] - 1)
		}
	} 
}

// console.log('result', fearNotLetter("abcdefghjklmno"));

/*==== DNA Pairing ====*/
function pairElement(str) {
	
	const result = []
	
	str.split('').forEach(element => {
		switch (element) {
			case 'A':
				result.push(['A', 'T']);
				break;
			case 'T':
				result.push(['T', 'A']);
				break;
			case 'G':
				result.push(['G', 'C']);
				break;
			case 'C':
				result.push(['C', 'G']);
				break;
		}
	});
	return result;
}
// console.log(pairElement("ATCGA"))


