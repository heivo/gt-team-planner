import React from 'react';
import styles from '../style.module.scss';
import { SlotData } from '../context/StateContext';
import HeroBadge from './HeroBadge';
import WeaponBadge from './WeaponBadge';

interface Props {
	data: SlotData;
	onClickHero: () => void;
	onClickWeapon: () => void;
}

const Slot = ({ data: { hero, weapon }, onClickHero, onClickWeapon }: Props) => {
	return (
		<div className={styles.slot}>
			<HeroBadge hero={hero} onClick={onClickHero} />
			{weapon && <WeaponBadge weapon={weapon} onClick={onClickWeapon} />}
		</div>
	);
};

export default Slot;
