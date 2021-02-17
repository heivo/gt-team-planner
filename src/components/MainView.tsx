import React, { useContext, useState } from 'react';
import { Hero } from '../graphql/schema';
import HeroPicker from './HeroPicker';
import HeroesBuffSummary from './HeroesBuffSummary';
import StateContext from '../context/StateContext';
import Slot from './Slot';
import styles from '../style.module.scss';

function MainView() {
	const { slots, selectHero } = useContext(StateContext);

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
				<Slot data={slots[0]} onClickHero={openHeroPicker(0)} />
				<Slot data={slots[1]} onClickHero={openHeroPicker(1)} />
				<Slot data={slots[2]} onClickHero={openHeroPicker(2)} />
				<Slot data={slots[3]} onClickHero={openHeroPicker(3)} />
			</div>

			{/* <WeaponSlotContainer>
				<WeaponSlot weapon={slots[0].weapon} onClick={openWeaponPicker(0)} />
				<WeaponSlot weapon={slots[1].weapon} onClick={openWeaponPicker(1)} />
				<WeaponSlot weapon={slots[2].weapon} onClick={openWeaponPicker(2)} />
				<WeaponSlot weapon={slots[3].weapon} onClick={openWeaponPicker(3)} />
			</WeaponSlotContainer> */}

			<HeroesBuffSummary heroes={selectedHeros} />
		</>
	);
}

export default MainView;
