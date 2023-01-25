const findMissingLetter = (input) => {
	let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

	let first = input[0]
	if(first === first.toUpperCase()) {
		alphabet = alphabet.join('').toUpperCase().split('')
	}

	let startingPosition = alphabet.indexOf(first)

	let targetAlphabet = alphabet.slice(startingPosition)
	console.log(targetAlphabet)

   	for(let i = startingPosition; i < input.length + startingPosition; i++) {
   		if(input[i] !== targetAlphabet[i]) {
   			return targetAlphabet[i]
   		}
   	}

}

const inputArr = ['A','B','C','D','F'] // should log : E
const inputArr2 = ['a','b','c','d','f'] // should log : e

console.log(findMissingLetter(inputArr))

console.log(findMissingLetter(inputArr2))