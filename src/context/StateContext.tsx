import React, { useContext, useMemo } from 'react';
import DataContext, { Hero, Weapon } from './DataContext';
import useHistoryStore from './useHistoryStore';

export interface State {
	teams: Team[];
}

export interface Team {
	slots: Slot[];
	selectedChain: number | undefined;
}

export interface Slot {
	hero: Hero | null;
	weapon: Weapon | null;
}

const StateContext = React.createContext<{
	teams: Team[];
	addTeam: () => void;
	removeTeam: (teamNumber: number) => void;
	selectHero: (teamNumber: number, slotNumber: number, hero: Hero) => void;
	selectWeapon: (teamNumber: number, slotNumber: number, weapon: Weapon) => void;
	setSelectedChain: (teamNumber: number, index?: number) => void;
	findHero: (hero: Hero) => { teamNumber: number; slotNumber: number } | null;
	reset: () => void;
	// eslint-disable-next-line @typescript-eslint/no-empty-function
}>({
	teams: [],
	addTeam: () => {},
	removeTeam: () => {},
	selectHero: () => {},
	selectWeapon: () => {},
	setSelectedChain: () => {},
	findHero: () => null,
	reset: () => {},
});

export default StateContext;

interface Props {
	children: React.ReactNode;
}

export const StateContextProvider = ({ children }: Props) => {
	const { weapons } = useContext(DataContext);

	const { readState, writeState, clearState } = useHistoryStore();

	const state = useMemo<State>(() => readState(), [readState]);

	const addTeam = () => {
		state.teams.push({
			slots: [
				{ hero: null, weapon: null },
				{ hero: null, weapon: null },
				{ hero: null, weapon: null },
				{ hero: null, weapon: null },
			],
			selectedChain: undefined,
		});
	};

	const removeTeam = (teamNumber: number) => {
		state.teams.splice(teamNumber, 1);
	};

	const selectHero = (teamNumber: number, slotNumber: number, hero: Hero) => {
		let weapon = weapons.find((w) => w.sys.id === hero.defaultWeapon?.sys.id) ?? null;
		const prevHeroLocation = findHero(hero);
		if (prevHeroLocation) {
			if (teamNumber === prevHeroLocation.teamNumber) {
				// if hero was already selected in the same team, use the previously selected weapon
				weapon = state.teams[prevHeroLocation.teamNumber].slots[prevHeroLocation.slotNumber].weapon;
				// if hero was already selected in the same team, switch positions
				state.teams[prevHeroLocation.teamNumber].slots[prevHeroLocation.slotNumber] =
					state.teams[teamNumber].slots[slotNumber];
			} else {
				// if hero was previously selected in a different team, remove it from there
				state.teams[prevHeroLocation.teamNumber].slots[prevHeroLocation.slotNumber] = {
					hero: null,
					weapon: null,
				};
			}
		}
		state.teams[teamNumber].slots[slotNumber] = { hero, weapon };
		state.teams[teamNumber].selectedChain = undefined;
		writeState(state);
	};

	const selectWeapon = (teamNumber: number, slotNumber: number, weapon: Weapon) => {
		state.teams[teamNumber].slots[slotNumber].weapon = weapon;
		state.teams[teamNumber].selectedChain = undefined;
		writeState(state);
	};

	const setSelectedChain = (teamNumber: number, index?: number) => {
		state.teams[teamNumber].selectedChain = index;
		writeState(state);
	};

	const findHero = (hero: Hero): { teamNumber: number; slotNumber: number } | null => {
		for (let teamNumber = 0; teamNumber < state.teams.length; teamNumber++) {
			for (let slotNumber = 0; slotNumber < state.teams[teamNumber].slots.length; slotNumber++) {
				if (state.teams[teamNumber].slots[slotNumber].hero === hero) {
					return { teamNumber, slotNumber };
				}
			}
		}
		return null;
	};

	const reset = () => {
		clearState();
	};

	return (
		<StateContext.Provider
			value={{
				teams: state.teams,
				addTeam,
				removeTeam,
				selectHero,
				selectWeapon,
				setSelectedChain,
				findHero,
				reset,
			}}
		>
			{children}
		</StateContext.Provider>
	);
};
