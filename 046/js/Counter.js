export default class Counter {
	constructor() {
	}
}
Counter.getHistogram = function(text) {
	let characters = {};
	for (let i = 0; i < text.length; i++) {
		if (text[i] in characters) {
			characters[text[i]] += 1;
		} else {
			characters[text[i]] = 1;
		}
	}
	return characters;
}