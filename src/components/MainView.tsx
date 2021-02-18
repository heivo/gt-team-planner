import React, { useContext, useState } from 'react';
import HeroPicker from './HeroPicker';
import PartyBuffSummary from './PartyBuffSummary';
import StateContext from '../context/StateContext';
import Slot from './Slot';
import styles from '../style.module.scss';
import { Hero } from '../context/DataContext';
import ChainInfo from './ChainInfo';

function MainView() {
	const { slots, selectHero, reset } = useContext(StateContext);

	const selectedHeros = slots.map((slot) => slot.hero).filter((hero) => hero !== null) as Hero[];

	const [heroPickerSlot, setHeroPickerSlot] = useState<number>();

	const openHeroPicker = (slotNumber: number) => () => {
		setHeroPickerSlot(slotNumber);
	};

	const openWeaponPicker = (slotNumber: number) => () => {
		// setHeroPickerSlot(slotNumber);
	};

	const handleSelectHero = (slotNumber: number, hero: Hero) => {
		selectHero(slotNumber, hero);
		setHeroPickerSlot(undefined);
	};

	if (heroPickerSlot !== undefined) {
		const currentHero = slots[heroPickerSlot].hero;
		const lockedHeros = selectedHeros.filter((hero) => hero !== currentHero);
		return <HeroPicker lockedHeros={lockedHeros} onSelect={(hero) => handleSelectHero(heroPickerSlot, hero)} />;
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
