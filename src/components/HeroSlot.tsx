import { Hero } from '../graphql/schema';
import React from 'react';
import styles from '../style.module.scss';

interface Props {
	hero?: Hero;
	onClick: () => void;
}

const HeroSlot = ({ hero, onClick }: Props) => {
	return (
		<div className={styles['hero-slot']} onClick={onClick}>
			{hero ? <img src={hero.image?.url ?? ''} alt={hero.name ?? ''} /> : '<empty>'}
		</div>
	);
};

export default HeroSlot;
