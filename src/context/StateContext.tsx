import React, { useContext, useMemo, useRef, useState } from 'react';
import DataContext, { Hero, Weapon } from './DataContext';
import useHistoryStore from './useHistoryStore';

export interface State {
	slots: SlotData[];
	selectedChain: number | undefined;
}

export interface SlotData {
	hero: Hero | null;
	weapon: Weapon | null;
}

const StateContext = React.createContext<{
	slots: SlotData[];
	selectedChain: number | undefined;
	selectHero: (slotNumber: number, hero: Hero) => void;
	selectWeapon: (slotNumber: number, weapon: Weapon) => void;
	setSelectedChain: (index?: number) => void;
	reset: () => void;
	// eslint-disable-next-line @typescript-eslint/no-empty-function
}>({
	slots: [],
	selectedChain: undefined,
	selectHero: () => {},
	selectWeapon: () => {},
	setSelectedChain: () => {},
	reset: () => {},
});

export default StateContext;

interface Props {
	children: React.ReactNode;
}

export const StateContextProvider = ({ children }: Props) => {
	const { weapons } = useContext(DataContext);

	const { hydrateState, updateStore, clearStore } = useHistoryStore();

	const state = useMemo<State>(() => hydrateState(), [hydrateState]);

	const selectHero = (slotNumber: number, hero: Hero) => {
		let weapon = weapons.find((w) => w.sys.id === hero.defaultWeapon?.sys.id) ?? null;
		const previousHeroSlotNumber = state.slots.findIndex((slot) => slot.hero === hero);
		if (previousHeroSlotNumber >= 0) {
			weapon = state.slots[previousHeroSlotNumber].weapon;
			if (state.slots[slotNumber]) {
				state.slots[previousHeroSlotNumber] = state.slots[slotNumber];
			} else {
				state.slots[previousHeroSlotNumber] = { hero: null, weapon: null };
			}
		}
		state.slots[slotNumber] = { hero, weapon };
		state.selectedChain = undefined;
		updateStore(state);
	};

	const selectWeapon = (slotNumber: number, weapon: Weapon) => {
		state.slots[slotNumber].weapon = weapon;
		state.selectedChain = undefined;
		updateStore(state);
	};

	const setSelectedChain = (index?: number) => {
		state.selectedChain = index;
		updateStore(state);
	};

	const reset = () => {
		clearStore();
	};

	return (
		<StateContext.Provider
			value={{
				slots: state.slots,
				selectedChain: state.selectedChain,
				selectHero,
				selectWeapon,
				setSelectedChain,
				reset,
			}}
		>
			{children}
		</StateContext.Provider>
	);
};
