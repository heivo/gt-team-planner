import React, { useContext, useMemo, useState } from 'react';
import DataContext, { Element, Hero, Weapon } from '../context/DataContext';
import styles from '../style.module.scss';
import CloseButton from './CloseButton';
import ElementPicker from './ElementPicker';
import WeaponBadge from './WeaponBadge';
import ReactTooltip from 'react-tooltip';

interface Props {
	hero: Hero;
	showAilment: boolean;
	onSelect: (weapoin: Weapon) => void;
	onClose: () => void;
}

const compareWeapons = (w1: Weapon, w2: Weapon): number => {
	let i = w1.rarity.localeCompare(w2.rarity);
	if (i === 0) {
		i = (w2.image ? 1 : 0) - (w1.image ? 1 : 0);
	}
	if (i === 0) {
		i = w1.name.localeCompare(w2.name);
	}
	return i;
};

function WeaponPicker({ hero, showAilment, onSelect, onClose }: Props) {
	const { weapons } = useContext(DataContext);

	const [elementFilter, setElementFilter] = useState<Element>();

	const availableWeapons = useMemo(
		() =>
			weapons
				.filter((weapon) => {
					if (!hero.weaponCategoriesCollection.items.some((cat) => cat.sys.id === weapon.category.sys.id)) {
						return false;
					}
					return true;
				})
				.sort(compareWeapons),
		[weapons, hero.weaponCategoriesCollection.items]
	);

	const filteredWeapons = useMemo(
		() =>
			availableWeapons.filter((weapon) => {
				if (elementFilter && weapon.element.sys.id !== elementFilter.sys.id) {
					return false;
				}
				return true;
			}),
		[availableWeapons, elementFilter]
	);

	return (
		<div className={styles.weaponPicker}>
			<div className={styles.weaponPickerFilters}>
				<ElementPicker selected={elementFilter} onSelect={setElementFilter} />
				<CloseButton onClick={onClose} title="Close" />
			</div>
			<div className={styles.weaponPickerWeapons}>
				{availableWeapons.map((weapon) => (
					<div key={weapon.sys.id} className={styles.badgeWrapper}>
						<WeaponBadge
							weapon={weapon}
							faded={!filteredWeapons.includes(weapon)}
							showAilment={showAilment}
							size={100}
							onClick={() => onSelect(weapon)}
						/>
					</div>
				))}
			</div>
			<ReactTooltip effect="solid" place="bottom" multiline delayShow={200} />
		</div>
	);
}

export default WeaponPicker;
