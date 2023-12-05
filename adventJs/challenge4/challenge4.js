function decode(message) {
	let open = 0;
	let close = 0;
	let msg = message;
	let msgL = msg.length;

	while (msg.indexOf('(') !== -1) {
		open = msg.lastIndexOf('(');
		close = msg.indexOf(')', open);

		const inverted = msg
			.substr(open + 1, close - open - 1)
			.split('')
			.reverse()
			.join('');

		const p1 = msg.substr(0, open);
		const p2 = inverted;
		const p3 = msg.substr(close + 1, msgL - close);

		const newString = p1 + p2 + p3;

		msg = newString;
	}
	return msg;
}

module.exports = decode;
