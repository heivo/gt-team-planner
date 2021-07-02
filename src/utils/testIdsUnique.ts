import { Hero, Weapon } from '../context/DataContext';

const testIdsUnique = (items: Array<Hero | Weapon>, idLength: number): void => {
	const ids = items.map((i) => i.sys.id.substr(0, idLength));
	ids.forEach((id, index) => {
		if (ids.slice(index + 1).includes(id)) {
			const item = items.find((i) => i.sys.id.startsWith(id));
			console.warn(`ID of ${item?.name} is not unique`);
		}
	});
};

export default testIdsUnique;
