/**
 * @author dmgf2008@hotmail.com (David Bonilla Castillo)
 */
export default class Rot13 {
	constructor() {
	}
}
/** Standard 26 letter Alphabet */
Rot13.alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
/** Encrypt/Decrypt */
Rot13.encrypt = function(message) {
	/** Smallest optimization ever */
	let messageLength = message.length;
	/** Empty String */
	let encrypted = "";
	/** For each letter of the message */
	for (let i = 0; i < messageLength; i++) {
		/** Get the letter */
		let letter = message[i];
		/** Check if it's lowercase */
		let isLowerCase = (letter == letter.toLowerCase());
		/** Get the index of the letter in the alphabet 
		 * array and turn letter to lowercase */
		let letterIndex = Rot13.alphabet.indexOf(letter = letter.toLowerCase());
		/** Empty variable */
		let encryptedLetter = undefined;
		/** If the letter is not found */
		if (letterIndex === -1) {
			/** It's just some non-alphabet character, leave as is */
			encryptedLetter = letter;
		} else {
			/** Add 13 to the index and get the modulo of 
			 * the alphabet size. That's the new letter */
			encryptedLetter = Rot13.alphabet[(letterIndex + 13)%26];
		}
		/** If the letter was uppercase */
		if (!isLowerCase) {
			/** Return it to normal */
			encryptedLetter = encryptedLetter.toUpperCase();
		}
		/** Add encrypted character to the final encrypted message */
		encrypted += encryptedLetter;
	}
	return encrypted;
}