import React, { useContext, useState } from 'react';
import HeroPicker from './HeroPicker';
import PartyBuffSummary from './PartyBuffSummary';
import StateContext from '../context/StateContext';
import Slot from './Slot';
import styles from '../style.module.scss';
import { Hero, Weapon } from '../context/DataContext';
import ChainInfo from './ChainInfo';
import WeaponPicker from './WeaponPicker';

function MainView() {
	const { slots, selectHero, selectWeapon, reset } = useContext(StateContext);

	const selectedHeros = slots.map((slot) => slot.hero).filter((hero) => hero !== null) as Hero[];

	const [heroPickerSlot, setHeroPickerSlot] = useState<number>();
	const [weaponPickerSlot, setWeaponPickerSlot] = useState<number>();

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
		const otherUsedHeros = selectedHeros.filter((hero) => hero !== currentHero);
		return (
			<HeroPicker
				otherUsedHeros={otherUsedHeros}
				onSelect={(hero) => handleSelectHero(heroPickerSlot, hero)}
				onClose={handleCloseHeroPicker}
			/>
		);
	}

	if (weaponPickerSlot !== undefined) {
		const currentHero = slots[weaponPickerSlot].hero as Hero;
		return (
			<WeaponPicker
				hero={currentHero}
				showAilment={weaponPickerSlot === 0}
				onSelect={(weapon) => handleSelectWeapon(weaponPickerSlot, weapon)}
				onClose={handleCloseWeaponPicker}
			/>
		);
	}

	return (
		<>
			<div className={styles.slotContainer}>
				{slots.map((slot, slotNumber) => (
					<Slot
						key={slotNumber}
						data={slot}
						onClickHero={openHeroPicker(slotNumber)}
						onClickWeapon={openWeaponPicker(slotNumber)}
						index={slotNumber}
					/>
				))}
			</div>
			<PartyBuffSummary heroes={selectedHeros} />
			<ChainInfo heroes={selectedHeros} weapon={slots?.[0].weapon} />
			{selectedHeros.length > 0 && (
				<button onClick={reset} className={styles.resetButton}>
					reset
				</button>
			)}
		</>
	);
}

export default MainView;
