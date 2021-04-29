import React, { useContext } from 'react';
import styles from '../style.module.scss';
import StateContext, { SlotData } from '../context/StateContext';
import HeroBadge from './HeroBadge';
import WeaponBadge from './WeaponBadge';

interface Props {
	number: number;
	data: SlotData;
	onClickHero: () => void;
	onClickWeapon: () => void;
	index: number;
}

const Slot = ({ number, data: { hero, weapon }, onClickHero, onClickWeapon, index }: Props) => {
	const { selectHero } = useContext(StateContext);
	return (
		<div className={styles.slot}>
			<HeroBadge hero={hero} onClick={onClickHero} size={150} />
			{((number > 0 && hero) || weapon) && (
				<div className={styles.slotSecondaryButtons}>
					{weapon && (
						<WeaponBadge weapon={weapon} onClick={onClickWeapon} showAilment={index === 0} size={80} />
					)}
					{number > 0 && hero && (
						<div
							className={styles.slotLeaderButton}
							onClick={() => selectHero(0, hero)}
							data-tip="Make party leader"
							data-delay-show="500"
						/>
					)}
				</div>
			)}
		</div>
	);
};

export default Slot;
