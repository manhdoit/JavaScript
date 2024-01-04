/*==== Sum All Odd Fibonacci Numbers ====*/
function sumFibs(num) {
	let sum = 0;
	do {
		sum = 
	}
	return num;
}

sumFibs(4);


// ***convertHTML***

function convertHTML(str) {
	let temp = str.split("");
	for (let i = 0; i < temp.length; i++) {
		switch (temp[i]) {
			case "<":
				temp[i] = "&lt;";
				break;
			case "&":
				temp[i] = "&amp;";
				break;
			case ">":
				temp[i] = "&gt;";
				break;
			case '"':
				temp[i] = "&quot;";
				break;
			case "'":
				temp[i] = "&apos;";
				break;
		}
	}
	temp = temp.join("")
	return temp;
}

// console.log(convertHTML("Dolce & Gabbana"));



/*==== Sorted Union ====*/
function uniteUnique(...arr) {
	let newArr = [...arr]
	let result = [];
	for (let i = 0; i < newArr.length; i++) {
		for (let j = 0; j < newArr[i].length; j++){
			if (!result.includes(newArr[i][j])) {
				result.push(newArr[i][j]);
			}
		}
	}
	return result;
}

// console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]));


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


