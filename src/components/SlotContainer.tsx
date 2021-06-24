import React, { useContext } from 'react';
import styles from '../style.module.scss';
import StateContext, { Slot } from '../context/StateContext';
import HeroBadge from './badges/HeroBadge';
import WeaponBadge from './badges/WeaponBadge';
import ReactTooltip from 'react-tooltip';
import crownIcon from '../assets/crown.png';

interface Props {
	teamNumber: number;
	slotNumber: number;
	slot: Slot;
	onClickHero: () => void;
	onClickWeapon: () => void;
	index: number;
}

const SlotContainer = ({
	teamNumber,
	slotNumber,
	slot: { hero, weapon },
	onClickHero,
	onClickWeapon,
	index,
}: Props) => {
	const { selectHero } = useContext(StateContext);

	const makeLeader = () => {
		if (hero) {
			selectHero(teamNumber, 0, hero);
		}
		ReactTooltip.hide();
	};

	return (
		<div className={styles.slot}>
			<HeroBadge hero={hero} onClick={onClickHero} size={150} />
			{((slotNumber > 0 && hero) || weapon) && (
				<div className={styles.slotSecondaryButtons}>
					{weapon && (
						<WeaponBadge weapon={weapon} onClick={onClickWeapon} showAilment={index === 0} size={80} />
					)}
					{slotNumber > 0 && hero && (
						<img
							src={crownIcon}
							className={styles.slotLeaderButton}
							onClick={makeLeader}
							data-tip={`Appoint ${hero.name} to party leader`}
							data-delay-show="500"
						/>
					)}
				</div>
			)}
		</div>
	);
};

export default SlotContainer;
