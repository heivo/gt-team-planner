import React, { useContext } from 'react';
import styles from '../style.module.scss';
import DataContext, { Ailment, Weapon } from '../context/DataContext';

interface Props {
	weapon: Weapon;
	onClick?: () => void;
	showAilment?: boolean;
}

const WeaponBadge = ({ weapon, onClick, showAilment = false }: Props) => {
	const { ailments } = useContext(DataContext);
	const ailment = ailments.find((a) => a.sys.id === weapon.ailment?.sys.id) as Ailment;

	return (
		<div
			className={styles.weaponBadge}
			onClick={onClick}
			style={{ backgroundImage: weapon?.image?.url ? `url(${weapon.image.url})` : undefined }}
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
