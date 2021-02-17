import React from 'react';
import styles from '../style.module.scss';
import { SlotData } from '../context/StateContext';
import HeroBadge from './HeroBadge';
import WeaponBadge from './WeaponBadge';

interface Props {
	data: SlotData;
	onClickHero: () => void;
	onClickWeapon: () => void;
	index: number;
}

const Slot = ({ data: { hero, weapon }, onClickHero, onClickWeapon, index }: Props) => {
	return (
		<div className={styles.slot}>
			<HeroBadge hero={hero} onClick={onClickHero} />
			{weapon && <WeaponBadge weapon={weapon} onClick={onClickWeapon} showAilment={index === 0} />}
		</div>
	);
};

export default Slot;
