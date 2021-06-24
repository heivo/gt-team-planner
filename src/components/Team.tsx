import React, { useMemo } from 'react';

import PartyBuffSummary from './PartyBuffSummary';
import { TeamSettings } from '../context/StateContext';
import Slot from './Slot';
import styles from '../style.module.scss';
import { Hero } from '../context/DataContext';
import ChainInfo from './ChainInfo';

import { isNotNull } from '../utils/typeUtils';

interface Props {
	settings: TeamSettings;
	teamNumber: number;
	openHeroPicker: (slotNumber: number) => void;
	openWeaponPicker: (slotNumber: number) => void;
	isCollapsed: boolean;
}

function Team({ settings: { slots }, teamNumber, openHeroPicker, openWeaponPicker, isCollapsed }: Props) {
	const heroes = useMemo<Hero[]>(() => slots.map((slot) => slot.hero).filter(isNotNull), [slots]);

	return (
		<div>
			<div className={styles.slotsWrapper}>
				{slots.map((slot, slotNumber) => (
					<Slot
						key={slotNumber}
						teamNumber={teamNumber}
						slotNumber={slotNumber}
						settings={slot}
						onClickHero={() => openHeroPicker(slotNumber)}
						onClickWeapon={() => openWeaponPicker(slotNumber)}
						isCollapsed={isCollapsed}
					/>
				))}
			</div>
			{!isCollapsed && <PartyBuffSummary heroes={heroes} />}
			{!isCollapsed && <ChainInfo heroes={heroes} weapon={slots[0].weapon} />}
		</div>
	);
}

export default Team;
