import React, { useState, useCallback } from 'react';
import { produce } from 'immer';
import { Data, Hero, Weapon } from '~/types';
import useBrowserHistoryState from './useBrowserHistoryState';

export const EMPTY_TEAM: TeamSettings = {
  slots: [
    { hero: null, weapon: null },
    { hero: null, weapon: null },
    { hero: null, weapon: null },
    { hero: null, weapon: null },
  ],
  selectedChain: undefined,
};

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

interface HeroLocation {
  teamNumber: number;
  slotNumber: number;
}

const StateContext = React.createContext<{
  teams: TeamSettings[];
  activeTeam: number | null;
  addTeam: () => void;
  removeTeam: (teamNumber: number) => void;
  selectHero: (teamNumber: number, slotNumber: number, hero: Hero) => void;
  selectWeapon: (teamNumber: number, slotNumber: number, weapon: Weapon) => void;
  setSelectedChain: (teamNumber: number, index?: number) => void;
  findHero: (hero: Hero) => HeroLocation | null;
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
  data: Data;
  children: React.ReactNode;
}

export const StateContextProvider = ({ children, data }: Props) => {
  const { state, setState, clearState } = useBrowserHistoryState(data);

  const [activeTeam, setActiveTeam] = useState<number | null>(() => (state.teams.length === 1 ? 0 : null));

  const addTeam = useCallback(() => {
    const nextState = produce(state, (draft) => {
      draft.teams.push(EMPTY_TEAM);
    });
    setState(nextState);
    setActiveTeam(nextState.teams.length - 1);
  }, [setState, state]);

  const removeTeam = useCallback(
    (teamNumber: number) => {
      const nextState = produce(state, (draft) => {
        draft.teams.splice(teamNumber, 1);
      });
      setState(nextState);
      if (nextState.teams.length === 1) {
        setActiveTeam(0);
      } else if (activeTeam != null && teamNumber < activeTeam) {
        setActiveTeam(activeTeam - 1);
      } else if (teamNumber === activeTeam) {
        setActiveTeam(null);
      }
    },
    [activeTeam, setState, state]
  );

  const findHero = useCallback(
    (hero: Hero): HeroLocation | null => {
      for (let teamNumber = 0; teamNumber < state.teams.length; teamNumber++) {
        for (let slotNumber = 0; slotNumber < state.teams[teamNumber].slots.length; slotNumber++) {
          if (state.teams[teamNumber].slots[slotNumber].hero?.sys.id === hero.sys.id) {
            return { teamNumber, slotNumber };
          }
        }
      }
      return null;
    },
    [state.teams]
  );

  const selectHero = useCallback(
    (teamNumber: number, slotNumber: number, hero: Hero) => {
      const nextState = produce(state, (draft) => {
        let weapon = data.weapons.find((w) => w.sys.id === hero.defaultWeapon?.sys.id) ?? null;
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
      setState(nextState);
    },
    [findHero, setState, state, data.weapons]
  );

  const selectWeapon = useCallback(
    (teamNumber: number, slotNumber: number, weapon: Weapon) => {
      const nextState = produce(state, (draft) => {
        draft.teams[teamNumber].slots[slotNumber].weapon = weapon;
        draft.teams[teamNumber].selectedChain = undefined;
      });
      setState(nextState);
    },
    [setState, state]
  );

  const setSelectedChain = useCallback(
    (teamNumber: number, index?: number) => {
      const nextState = produce(state, (draft) => {
        draft.teams[teamNumber].selectedChain = index;
      });
      setState(nextState);
    },
    [setState, state]
  );

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
