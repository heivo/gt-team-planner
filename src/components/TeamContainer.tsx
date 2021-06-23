import React, { useState, useEffect, useMemo } from 'react';
import HeroPicker from './HeroPicker';
import PartyBuffSummary from './PartyBuffSummary';
import { Team } from '../context/StateContext';
import SlotContainer from './SlotContainer';
import styles from '../style.module.scss';
import { Hero, Weapon } from '../context/DataContext';
import ChainInfo from './ChainInfo';
import WeaponPicker from './WeaponPicker';
import { isNotNull } from '../utils/typeUtils';

interface Props {
	team: Team;
	selectHero: (slotNumber: number, hero: Hero) => void;
	selectWeapon: (slotNumber: number, weapon: Weapon) => void;
}

function TeamContainer({ team: { slots }, selectHero, selectWeapon }: Props) {
	const [heroPickerSlot, setHeroPickerSlot] = useState<number>();
	const [weaponPickerSlot, setWeaponPickerSlot] = useState<number>();

	const heroes = useMemo<Hero[]>(() => slots.map((slot) => slot.hero).filter(isNotNull), [slots]);

	const openHeroPicker = (slotNumber: number) => () => {
		setHeroPickerSlot(slotNumber);
	};

	const openWeaponPicker = (slotNumber: number) => () => {
		setWeaponPickerSlot(slotNumber);
	};

	const handleSelectHero = (slotNumber: number, hero: Hero) => {
		selectHero(slotNumber, hero);
		setHeroPickerSlot(undefined);
	};

	const handleCloseHeroPicker = () => {
		setHeroPickerSlot(undefined);
	};

	const handleSelectWeapon = (slotNumber: number, weapon: Weapon) => {
		selectWeapon(slotNumber, weapon);
		setWeaponPickerSlot(undefined);
	};

	const handleCloseWeaponPicker = () => {
		setWeaponPickerSlot(undefined);
	};

	if (heroPickerSlot !== undefined) {
		const currentHero = slots[heroPickerSlot].hero;
		return (
			<HeroPicker
				currentHero={currentHero}
				onSelect={(hero) => handleSelectHero(heroPickerSlot, hero)}
				onClose={handleCloseHeroPicker}
			/>
		);
	}

	if (weaponPickerSlot !== undefined) {
		const weaponCategoryIds =
			slots[weaponPickerSlot].hero?.weaponCategoriesCollection.items.map((i) => i.sys.id) ?? [];
		return (
			<WeaponPicker
				weaponCategoryIds={weaponCategoryIds}
				showAilment={weaponPickerSlot === 0}
				onSelect={(weapon) => handleSelectWeapon(weaponPickerSlot, weapon)}
				onClose={handleCloseWeaponPicker}
			/>
		);
	}

	return (
		<div>
			<div className={styles.slotContainer}>
				{slots.map((slot, slotNumber) => (
					<SlotContainer
						key={slotNumber}
						number={slotNumber}
						slot={slot}
						onClickHero={openHeroPicker(slotNumber)}
						onClickWeapon={openWeaponPicker(slotNumber)}
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
