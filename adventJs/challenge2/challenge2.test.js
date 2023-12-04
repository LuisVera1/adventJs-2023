const manufacture = require('./challenge2');

describe('Test for Challenge #2', () => {
	test('Challenge 2', () => {
		const gifts = ['tren', 'oso', 'pelota'];
		const materials = 'tronesa';
		const expected = ['tren', 'oso'];

		const gifts2 = ['juego', 'puzzle'];
		const materials2 = 'jlepuz';
		const expected2 = ['puzzle'];

		const gifts3 = ['libro', 'ps5'];
		const materials3 = 'psli';
		const expected3 = [];

		expect(manufacture(gifts, materials)).toEqual(expected);
		expect(manufacture(gifts2, materials2)).toEqual(expected2);
		expect(manufacture(gifts3, materials3)).toEqual(expected3);
	});
});
