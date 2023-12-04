const findFirstRepeated = require('./challenge1');
//import {describe, expect, test} from '@jest/globals'

describe('Test for Challenge #1', () => {
	test('Returb', () => {
		const gifts = [2, 1, 3, 5, 3, 2];
		const expected = 3;

		const gifts2 = [1, 2, 3, 4];
		const expected2 = -1;

		const gifts3 = [5, 1, 5, 1];
		const expected3 = 5;

		expect(findFirstRepeated(gifts)).toBe(expected);
		expect(findFirstRepeated(gifts2)).toBe(expected2);
		expect(findFirstRepeated(gifts3)).toBe(expected3);
	});
});
