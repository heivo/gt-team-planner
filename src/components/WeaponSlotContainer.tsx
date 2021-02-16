import React from 'react';
import styles from '../style.module.scss';

interface Props {
	children: React.ReactNode;
}

const WeaponSlotContainer = ({ children }: Props) => {
	return <div className={styles['weapon-slot-container']}>{children}</div>;
};

export default WeaponSlotContainer;
