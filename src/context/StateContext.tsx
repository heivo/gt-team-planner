import React from 'react';
import { Hero, Weapon } from '../graphql/schema';

export interface HeroSlotData {
	hero: Hero | null;
	weapon: Weapon | null;
}

const StateContext = React.createContext<{
	heroSlots: HeroSlotData[];
	selectHero: (slotNumber: number, hero: Hero) => void;
	// eslint-disable-next-line @typescript-eslint/no-empty-function
}>({ heroSlots: [], selectHero: () => {} });

export default StateContext;

interface Props {
	children: React.ReactNode;
}

export const StateContextProvider = ({ children }: Props) => {
	const heroSlots: HeroSlotData[] = [
		{ hero: null, weapon: null },
		{ hero: null, weapon: null },
		{ hero: null, weapon: null },
		{ hero: null, weapon: null },
	];

	const selectHero = (slotNumber: number, hero: Hero) => {
		heroSlots[slotNumber] = { hero, weapon: null };
	};

	return <StateContext.Provider value={{ heroSlots, selectHero }}>{children}</StateContext.Provider>;
};
