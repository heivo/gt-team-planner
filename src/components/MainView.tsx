import React from 'react';
import HeroSlot from './HeroSlot';
import HeroSlotContainer from './HeroSlotContainer';

function MainView() {
	return (
		<HeroSlotContainer>
			<HeroSlot />
			<HeroSlot />
			<HeroSlot />
			<HeroSlot />
		</HeroSlotContainer>
	);
}

export default MainView;
