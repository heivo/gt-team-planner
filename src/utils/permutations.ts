const permutations = <T>(arr: T[]): T[][] => {
	if (arr.length < 2) return [arr];
	const res: T[][] = [];
	arr.forEach(function (x, i) {
		permutations(arr.slice(0, i).concat(arr.slice(i + 1))).forEach(function (a) {
			res.push([x].concat(a));
		});
	});
	return res;
};

export default permutations;
