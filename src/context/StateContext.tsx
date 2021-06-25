/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useContext, useState, useMemo } from 'react';
import DataContext, { Hero, Weapon } from './DataContext';
import useBrowserHistory from './useBrowserHistory';
import { produce } from 'immer';

export interface State {
	teams: TeamSettings[];
}

export interface TeamSettings {
	slots: SlotSettings[];
	selectedChain: number | undefined;
}

export interface SlotSettings {
	hero: Hero | null;
	weapon: Weapon | null;
}

const StateContext = React.createContext<{
	teams: TeamSettings[];
	activeTeam: number | null;
	addTeam: () => void;
	removeTeam: (teamNumber: number) => void;
	selectHero: (teamNumber: number, slotNumber: number, hero: Hero) => void;
	selectWeapon: (teamNumber: number, slotNumber: number, weapon: Weapon) => void;
	setSelectedChain: (teamNumber: number, index?: number) => void;
	findHero: (hero: Hero) => { teamNumber: number; slotNumber: number } | null;
	reset: () => void;
	setActiveTeam: (teamNumber: number | null) => void;
}>({
	teams: [],
	activeTeam: null,
	addTeam: () => {},
	removeTeam: () => {},
	selectHero: () => {},
	selectWeapon: () => {},
	setSelectedChain: () => {},
	findHero: () => null,
	reset: () => {},
	setActiveTeam: () => {},
});

export default StateContext;

interface Props {
	children: React.ReactNode;
}

export const StateContextProvider = ({ children }: Props) => {
	const { weapons } = useContext(DataContext);

	const { readState, writeState, clearState } = useBrowserHistory();

	const state = useMemo<State>(() => readState(), [readState]);

	const [activeTeam, setActiveTeam] = useState<number | null>(state.teams.length === 1 ? 0 : null);

	const addTeam = () => {
		const nextState = produce(state, (draft) => {
			draft.teams.push({
				slots: [
					{ hero: null, weapon: null },
					{ hero: null, weapon: null },
					{ hero: null, weapon: null },
					{ hero: null, weapon: null },
				],
				selectedChain: undefined,
			});
		});
		writeState(nextState);
		setActiveTeam(nextState.teams.length - 1);
	};

	const removeTeam = (teamNumber: number) => {
		const nextState = produce(state, (draft) => {
			draft.teams.splice(teamNumber, 1);
		});
		writeState(nextState);
		setActiveTeam(null);
	};

	const selectHero = (teamNumber: number, slotNumber: number, hero: Hero) => {
		const nextState = produce(state, (draft) => {
			let weapon = weapons.find((w) => w.sys.id === hero.defaultWeapon?.sys.id) ?? null;
			const prevHeroLocation = findHero(hero);
			if (prevHeroLocation) {
				if (teamNumber === prevHeroLocation.teamNumber) {
					// if hero was already selected in the same team, use the previously selected weapon
					weapon = draft.teams[prevHeroLocation.teamNumber].slots[prevHeroLocation.slotNumber].weapon;
					// if hero was already selected in the same team, switch positions
					draft.teams[prevHeroLocation.teamNumber].slots[prevHeroLocation.slotNumber] =
						draft.teams[teamNumber].slots[slotNumber];
				} else {
					// if hero was previously selected in a different team, remove it from there
					draft.teams[prevHeroLocation.teamNumber].slots[prevHeroLocation.slotNumber] = {
						hero: null,
						weapon: null,
					};
				}
			}
			draft.teams[teamNumber].slots[slotNumber] = { hero, weapon };
			draft.teams[teamNumber].selectedChain = undefined;
		});
		writeState(nextState);
	};

	const selectWeapon = (teamNumber: number, slotNumber: number, weapon: Weapon) => {
		const nextState = produce(state, (draft) => {
			draft.teams[teamNumber].slots[slotNumber].weapon = weapon;
			draft.teams[teamNumber].selectedChain = undefined;
		});
		writeState(nextState);
	};

	const setSelectedChain = (teamNumber: number, index?: number) => {
		const nextState = produce(state, (draft) => {
			draft.teams[teamNumber].selectedChain = index;
		});
		writeState(nextState);
	};

	const findHero = (hero: Hero): { teamNumber: number; slotNumber: number } | null => {
		for (let teamNumber = 0; teamNumber < state.teams.length; teamNumber++) {
			for (let slotNumber = 0; slotNumber < state.teams[teamNumber].slots.length; slotNumber++) {
				if (state.teams[teamNumber].slots[slotNumber].hero?.sys.id === hero.sys.id) {
					return { teamNumber, slotNumber };
				}
			}
		}
		return null;
	};

	const reset = () => {
		clearState();
		setActiveTeam(0);
	};

	return (
		<StateContext.Provider
			value={{
				teams: state.teams,
				activeTeam,
				addTeam,
				removeTeam,
				selectHero,
				selectWeapon,
				setSelectedChain,
				findHero,
				reset,
				setActiveTeam,
			}}
		>
			{children}
		</StateContext.Provider>
	);
};
