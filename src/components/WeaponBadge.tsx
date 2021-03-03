import React, { useContext, useMemo } from 'react';
import styles from '../style.module.scss';
import DataContext, { Ailment, Element, Weapon, WeaponCategory } from '../context/DataContext';

interface Props {
	weapon: Weapon;
	onClick?: () => void;
	showAilment?: boolean;
	size?: number;
}

const WeaponBadge = ({ weapon, onClick, showAilment = false, size = 150 }: Props) => {
	const { ailments, elements, weaponCategories } = useContext(DataContext);

	const ailment = ailments.find((a) => a.sys.id === weapon.ailment.sys.id) as Ailment;
	const element = elements.find((e) => e.sys.id === weapon.element.sys.id) as Element;
	const category = weaponCategories.find((c) => c.sys.id === weapon.category.sys.id) as WeaponCategory;

	const borderColor = useMemo<string>(() => {
		switch (weapon.rarity) {
			case 'unique':
				return '#ad5833';
			case 'legend':
				return '#c39f3e';
			case 'epic':
				return '#4b812d';
			default:
				return '#fff';
		}
	}, [weapon.rarity]);

	const shadowColor = useMemo<string>(() => {
		switch (weapon.rarity) {
			case 'unique':
				return '#e69465';
			case 'legend':
				return '#ffdd5f';
			case 'epic':
				return '#95f053';
			default:
				return '#fff';
		}
	}, [weapon.rarity]);

	return (
		<div
			className={styles.weaponBadge}
			onClick={onClick}
			style={{
				backgroundImage: weapon.image?.url ? `url(${weapon.image.url})` : `url(${category.image.url})`,
				backgroundSize: weapon.image?.url ? 'contain' : 'auto',
				width: size,
				height: size,
				cursor: onClick ? 'pointer' : 'default',
				boxShadow: `inset 0 0 10px ${shadowColor}`,
				borderColor,
			}}
			title={weapon?.name ?? undefined}
		>
			<div className={styles.weaponBadgeElementContainer} style={{ width: Math.max(size / 4, 25) }}>
				<img src={element.image.url} title={element.name} alt={element.name} />
			</div>
			{showAilment && (
				<div className={styles.weaponBadgeAilment}>
					<img src={ailment.image?.url ?? ''} alt={ailment.name ?? ''} title={ailment.name ?? ''} />
				</div>
			)}
		</div>
	);
};

export default WeaponBadge;
