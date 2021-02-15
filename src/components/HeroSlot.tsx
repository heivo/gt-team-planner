import { Hero } from '../graphql/schema';
import React from 'react';
import styles from '../style.module.scss';

interface Props {
	hero?: Hero;
}

const HeroSlot = ({ hero }: Props) => {
	return <div className={styles['hero-slot']}>{hero?.name ?? '<empty>'}</div>;
};

export default HeroSlot;
