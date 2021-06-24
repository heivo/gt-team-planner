/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useContext, useState, useEffect } from 'react';
import DataContext, { Hero, Weapon } from './DataContext';
import useHistoryStore from './useHistoryStore';
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

	const { readStateFromStore, writeStateToStore, clearStore } = useHistoryStore();

	const [state, setState] = useState<State>(readStateFromStore);

	useEffect(() => {
		writeStateToStore(state);
	}, [writeStateToStore, state]);

	const [activeTeam, setActiveTeam] = useState<number | null>(state.teams.length === 1 ? 0 : null);

	const addTeam = () => {
		setState(
			produce((draft) => {
				draft.teams.push({
					slots: [
						{ hero: null, weapon: null },
						{ hero: null, weapon: null },
						{ hero: null, weapon: null },
						{ hero: null, weapon: null },
					],
					selectedChain: undefined,
				});
			})
		);
		setActiveTeam(state.teams.length);
	};

	const removeTeam = (teamNumber: number) => {
		setState(
			produce((draft) => {
				draft.teams.splice(teamNumber, 1);
			})
		);
		setActiveTeam(state.teams.length);
	};

	const selectHero = (teamNumber: number, slotNumber: number, hero: Hero) => {
		setState(
			produce((draft) => {
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
			})
		);
	};

	const selectWeapon = (teamNumber: number, slotNumber: number, weapon: Weapon) => {
		setState(
			produce((draft) => {
				draft.teams[teamNumber].slots[slotNumber].weapon = weapon;
				draft.teams[teamNumber].selectedChain = undefined;
			})
		);
	};

	const setSelectedChain = (teamNumber: number, index?: number) => {
		setState(
			produce((draft) => {
				draft.teams[teamNumber].selectedChain = index;
			})
		);
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
		clearStore();
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
