import React from 'react';
import styles from '../style.module.scss';
import { SlotData } from '../context/StateContext';
import HeroBadge from './HeroBadge';

interface Props {
	data: SlotData;
	onClickHero: () => void;
}

const Slot = ({ data: { hero, weapon }, onClickHero }: Props) => {
	return (
		<div className={styles.slot}>
			<HeroBadge hero={hero} onClick={onClickHero} />
		</div>
	);
};

export default Slot;
