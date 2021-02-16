import React, { useContext } from 'react';
import { Hero, Weapon } from '../graphql/schema';
import DataContext from './DataContext';

export interface SlotData {
	hero: Hero | null;
	weapon: Weapon | null;
}

const StateContext = React.createContext<{
	slots: SlotData[];
	selectHero: (slotNumber: number, hero: Hero) => void;
	// eslint-disable-next-line @typescript-eslint/no-empty-function
}>({ slots: [], selectHero: () => {} });

export default StateContext;

interface Props {
	children: React.ReactNode;
}

export const StateContextProvider = ({ children }: Props) => {
	const slots: SlotData[] = [
		{ hero: null, weapon: null },
		{ hero: null, weapon: null },
		{ hero: null, weapon: null },
		{ hero: null, weapon: null },
	];

	const { weapons } = useContext(DataContext);

	const selectHero = (slotNumber: number, hero: Hero) => {
		const weapon = weapons.find((w) => w.sys.id === hero.defaultWeapon?.sys.id) ?? null;
		slots[slotNumber] = { hero, weapon };
	};

	return <StateContext.Provider value={{ slots, selectHero }}>{children}</StateContext.Provider>;
};
