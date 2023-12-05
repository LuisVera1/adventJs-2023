const decode = require('./challenge4');

describe('Test for Challenge #4', () => {
	test('Challenge 4', () => {
		const a = 'hola (odnum)';
		const expA = 'hola mundo';

		const b = '(olleh) (dlrow)!';
		const expB = 'hello world!';

		const c = 'sa(u(cla)atn)s';
		const expC = 'santaclaus';

		const d = '1(j(34(765)89(d(bc)a)efghi)2)k';
		const expD = '123456789abcdefghijk';

		expect(decode(a)).toBe(expA);
		expect(decode(b)).toBe(expB);
		expect(decode(c)).toBe(expC);
		expect(decode(d)).toBe(expD);
	});
});
