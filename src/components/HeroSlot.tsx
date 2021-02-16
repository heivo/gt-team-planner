import React from 'react';
import styles from '../style.module.scss';
import { HeroSlotData } from '../context/StateContext';

interface Props {
	heroSlot: HeroSlotData;
	onClick: () => void;
}

const HeroSlot = ({ heroSlot, onClick }: Props) => {
	return (
		<div className={styles['hero-slot']} onClick={onClick}>
			{heroSlot.hero ? <img src={heroSlot.hero.image?.url ?? ''} alt={heroSlot.hero.name ?? ''} /> : '<empty>'}
		</div>
	);
};

export default HeroSlot;
