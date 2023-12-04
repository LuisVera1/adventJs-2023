function findFirstRepeated(gifts) {
	let giftSerie = {};

	const repeated =
		gifts.find((g) => {
			if (giftSerie[g]) {
				return g;
			} else {
				giftSerie[g] = true;
			}
		}) || -1;

	return repeated;
}

module.exports = findFirstRepeated;
