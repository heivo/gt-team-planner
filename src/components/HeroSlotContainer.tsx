import React from 'react';
import styles from '../style.module.scss';

interface Props {
	children: React.ReactNode;
}

const HeroSlotContainer = ({ children }: Props) => {
	return <div className={styles['hero-slot-container']}>{children}</div>;
};

export default HeroSlotContainer;
