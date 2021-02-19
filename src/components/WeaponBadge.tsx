import React, { useContext } from 'react';
import styles from '../style.module.scss';
import DataContext, { Ailment, Weapon } from '../context/DataContext';

interface Props {
	weapon: Weapon;
	onClick?: () => void;
	showAilment?: boolean;
	size?: number;
}

const WeaponBadge = ({ weapon, onClick, showAilment = false, size = 150 }: Props) => {
	const { ailments } = useContext(DataContext);
	const ailment = ailments.find((a) => a.sys.id === weapon.ailment?.sys.id) as Ailment;

	return (
		<div
			className={styles.weaponBadge}
			onClick={onClick}
			style={{
				backgroundImage: weapon?.image?.url ? `url(${weapon.image.url})` : undefined,
				width: size,
				height: size,
				cursor: onClick ? 'pointer' : 'default',
			}}
			title={weapon?.name ?? undefined}
		>
			{showAilment && (
				<div className={styles.weaponBadgeAilment}>
					<img src={ailment.image?.url ?? ''} alt={ailment.name ?? ''} title={ailment.name ?? ''} />
				</div>
			)}
		</div>
	);
};

export default WeaponBadge;
