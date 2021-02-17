import React, { useContext } from 'react';
import styles from '../style.module.scss';
import { Ailment, Weapon } from '../graphql/schema';
import DataContext from '../context/DataContext';

interface Props {
	weapon: Weapon;
	onClick?: () => void;
	locked?: boolean;
}

const WeaponBadge = ({ weapon, onClick }: Props) => {
	const { ailments } = useContext(DataContext);
	const ailment = ailments.find((a) => a.sys.id === weapon.ailment?.sys.id) as Ailment;

	return (
		<div
			className={styles.weaponBadge}
			onClick={onClick}
			style={{ backgroundImage: weapon?.image?.url ? `url(${weapon.image.url})` : undefined }}
			title={weapon?.name ?? undefined}
		/>
	);
};

export default WeaponBadge;
