import React, { useContext, useState } from 'react';
import { Hero } from '../graphql/schema';
import HeroPicker from './HeroPicker';
import HeroSlot from './HeroSlot';
import HeroSlotContainer from './HeroSlotContainer';
import HeroesBuffSummary from './HeroesBuffSummary';
import StateContext from '../context/StateContext';

function MainView() {
	const { heroSlots, selectHero } = useContext(StateContext);

	const selectedHeros = heroSlots.map((slot) => slot.hero).filter((hero) => hero !== null) as Hero[];

	const [heroPickerSlot, setHeroPickerSlot] = useState<number>();

	const openHeroPicker = (slotNumber: number) => () => {
		setHeroPickerSlot(slotNumber);
	};

	const handleSelectHero = (slotNumber: number, hero: Hero) => {
		selectHero(slotNumber, hero);
		setHeroPickerSlot(undefined);
	};

	if (heroPickerSlot !== undefined) {
		const currentHero = heroSlots[heroPickerSlot].hero;
		const lockedHeros = selectedHeros.filter((hero) => hero !== currentHero);
		return <HeroPicker lockedHeros={lockedHeros} onSelect={(hero) => handleSelectHero(heroPickerSlot, hero)} />;
	}

	return (
		<>
			<HeroSlotContainer>
				<HeroSlot heroSlot={heroSlots[0]} onClick={openHeroPicker(0)} />
				<HeroSlot heroSlot={heroSlots[1]} onClick={openHeroPicker(1)} />
				<HeroSlot heroSlot={heroSlots[2]} onClick={openHeroPicker(2)} />
				<HeroSlot heroSlot={heroSlots[3]} onClick={openHeroPicker(3)} />
			</HeroSlotContainer>
			<HeroesBuffSummary heroes={selectedHeros} />
		</>
	);
}

export default MainView;
