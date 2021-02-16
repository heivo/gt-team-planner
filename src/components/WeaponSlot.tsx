import React from 'react';
import styles from '../style.module.scss';
import { Weapon } from '../graphql/schema';

interface Props {
	weapon: Weapon | null;
	onClick: () => void;
}

const WeaponSlot = ({ weapon, onClick }: Props) => {
	return (
		<div className={styles['weapon-slot']} onClick={onClick}>
			{weapon ? <img src={weapon.image?.url ?? ''} alt={weapon.name ?? ''} /> : '<empty>'}
		</div>
	);
};

export default WeaponSlot;
