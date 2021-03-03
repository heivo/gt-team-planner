import React, { useContext, useMemo } from 'react';
import DataContext, { Hero, Weapon } from './DataContext';
import useHistoryStore from './useHistoryStore';

export interface SlotData {
	hero: Hero | null;
	weapon: Weapon | null;
}

const StateContext = React.createContext<{
	slots: SlotData[];
	selectHero: (slotNumber: number, hero: Hero) => void;
	selectWeapon: (slotNumber: number, weapon: Weapon) => void;
	reset: () => void;
	// eslint-disable-next-line @typescript-eslint/no-empty-function
}>({ slots: [], selectHero: () => {}, selectWeapon: () => {}, reset: () => {} });

export default StateContext;

interface Props {
	children: React.ReactNode;
}

export const StateContextProvider = ({ children }: Props) => {
	const { weapons } = useContext(DataContext);

	const { hydrateSlots, updateStore, clearStore } = useHistoryStore();

	const slots = useMemo<SlotData[]>(() => hydrateSlots(), [hydrateSlots]);

	const selectHero = (slotNumber: number, hero: Hero) => {
		const weapon = weapons.find((w) => w.sys.id === hero.defaultWeapon?.sys.id) ?? null;
		const previousHeroSlotNumber = slots.findIndex((slot) => slot.hero === hero);
		if (previousHeroSlotNumber >= 0) {
			if (slots[slotNumber]) {
				slots[previousHeroSlotNumber] = slots[slotNumber];
			} else {
				slots[previousHeroSlotNumber] = { hero: null, weapon: null };
			}
		}
		slots[slotNumber] = { hero, weapon };
		updateStore(slots);
	};

	const selectWeapon = (slotNumber: number, weapon: Weapon) => {
		slots[slotNumber].weapon = weapon;
		updateStore(slots);
	};

	const reset = () => {
		clearStore();
	};

	return <StateContext.Provider value={{ slots, selectHero, selectWeapon, reset }}>{children}</StateContext.Provider>;
};
