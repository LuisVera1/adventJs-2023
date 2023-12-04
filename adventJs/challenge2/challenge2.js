function manufacture(gifts, materials) {
	const giftManufactured = gifts.filter((g) => {
		const materialRequired = g.length;
		let existingMaterial = 0;

		for (material of g) {
			if (materials.includes(material)) {
				existingMaterial++;
			}
		}
		if (existingMaterial === materialRequired) return g;
	});

	return giftManufactured;
}

module.exports = manufacture;
