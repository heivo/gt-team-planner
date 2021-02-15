import React, { useState } from 'react';
import { Hero } from '../graphql/schema';
import HeroPicker from './HeroPicker';
import HeroSlot from './HeroSlot';
import HeroSlotContainer from './HeroSlotContainer';
import HeroesBuffSummary from './HeroesBuffSummary';

function MainView() {
	const [heroes, setHeroes] = useState<Array<Hero | undefined>>([undefined, undefined, undefined, undefined]);
	const [heroPickerSlot, setHeroPickerSlot] = useState<number>();

	const handleClick = (slotNumber: number) => () => {
		setHeroPickerSlot(slotNumber);
	};

	const handleSelectHero = (slotNumber: number, hero: Hero) => {
		setHeroes((state) =>
			state.map((h, i) => {
				if (i === slotNumber) {
					return hero;
				}
				return h;
			})
		);
		setHeroPickerSlot(undefined);
	};

	if (heroPickerSlot !== undefined) {
		const current = heroes[heroPickerSlot];
		const locked = heroes.filter((h) => h != null && h.sys.id !== current?.sys.id) as Hero[];
		return <HeroPicker locked={locked} onSelect={(hero) => handleSelectHero(heroPickerSlot, hero)} />;
	}
	return (
		<>
			<HeroSlotContainer>
				<HeroSlot hero={heroes[0]} onClick={handleClick(0)} />
				<HeroSlot hero={heroes[1]} onClick={handleClick(1)} />
				<HeroSlot hero={heroes[2]} onClick={handleClick(2)} />
				<HeroSlot hero={heroes[3]} onClick={handleClick(3)} />
			</HeroSlotContainer>
			<HeroesBuffSummary heroes={heroes} />
		</>
	);
}

export default MainView;
