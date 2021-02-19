import React, { useContext } from 'react';
import DataContext, { Hero, Weapon } from '../context/DataContext';
import styles from '../style.module.scss';
import WeaponBadge from './WeaponBadge';

interface Props {
	hero: Hero;
	showAilment: boolean;
	onSelect: (weapoin: Weapon) => void;
}

function WeaponPicker({ hero, showAilment, onSelect }: Props) {
	const { weapons } = useContext(DataContext);

	const availableWeapons = weapons.filter((w) =>
		hero.weaponCategoriesCollection.items.some((cat) => cat.sys.id === w.category.sys.id)
	);

	return (
		<div className={styles.weaponPicker}>
			{availableWeapons.map((weapon) => (
				<div key={weapon.sys.id} className={styles.badgeWrapper}>
					<WeaponBadge weapon={weapon} showAilment={showAilment} onClick={() => onSelect(weapon)} />
				</div>
			))}
		</div>
	);
}

export default WeaponPicker;
