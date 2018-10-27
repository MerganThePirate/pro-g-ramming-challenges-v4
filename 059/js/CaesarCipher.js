/**
 * @author dmgf2008@hotmail.com (David Bonilla Castillo)
 */
export default class CaesarCipher {
	constructor() {
	}
}
/** Standard 26 letter Alphabet */
CaesarCipher.alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
/** Encrypt/Decrypt */
CaesarCipher.encrypt = function(message, rotNum) {
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
		let letterIndex = CaesarCipher.alphabet.indexOf(letter = letter.toLowerCase());
		/** Empty variable */
		let encryptedLetter = undefined;
		/** If the letter is not found */
		if (letterIndex === -1) {
			/** It's just some non-alphabet character, leave as is */
			encryptedLetter = letter;
		} else {
			/** Add rotNum to the index and get the modulo of 
			 * the alphabet size. That's the new letter */
			encryptedLetter = CaesarCipher.alphabet[(letterIndex + rotNum)%26];
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