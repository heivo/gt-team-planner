import React, { useMemo } from 'react';

import PartyBuffSummary from './PartyBuffSummary';
import { Team } from '../context/StateContext';
import SlotContainer from './SlotContainer';
import styles from '../style.module.scss';
import { Hero } from '../context/DataContext';
import ChainInfo from './ChainInfo';

import { isNotNull } from '../utils/typeUtils';

interface Props {
	team: Team;
	openHeroPicker: (slotNumber: number) => void;
	openWeaponPicker: (slotNumber: number) => void;
}

function TeamContainer({ team: { slots }, openHeroPicker, openWeaponPicker }: Props) {
	const heroes = useMemo<Hero[]>(() => slots.map((slot) => slot.hero).filter(isNotNull), [slots]);

	return (
		<div>
			<div className={styles.slotContainer}>
				{slots.map((slot, slotNumber) => (
					<SlotContainer
						key={slotNumber}
						number={slotNumber}
						slot={slot}
						onClickHero={() => openHeroPicker(slotNumber)}
						onClickWeapon={() => openWeaponPicker(slotNumber)}
						index={slotNumber}
					/>
				))}
			</div>
			<PartyBuffSummary heroes={heroes} />
			<ChainInfo heroes={heroes} weapon={slots[0].weapon} />
		</div>
	);
}

export default TeamContainer;
