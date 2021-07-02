import React from 'react';

import PartyBuffSummary from './PartyBuffSummary';
import { TeamSettings } from '../context/StateContext';
import Slot from './Slot';
import styles from '../style.module.scss';
import ChainInfo from './ChainInfo';

interface Props {
	settings: TeamSettings;
	teamNumber: number;
	openHeroPicker: (slotNumber: number) => void;
	openWeaponPicker: (slotNumber: number) => void;
	isCollapsed: boolean;
}

function Team({ settings, teamNumber, openHeroPicker, openWeaponPicker, isCollapsed }: Props) {
	return (
		<div>
			<div className={styles.slotsWrapper}>
				{settings.slots.map((slot, slotNumber) => (
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
			{!isCollapsed && <PartyBuffSummary settings={settings} />}
			{!isCollapsed && <ChainInfo settings={settings} teamNumber={teamNumber} />}
		</div>
	);
}

export default Team;
