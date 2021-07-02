import { useContext, useCallback, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import DataContext, { Hero, Weapon } from './DataContext';
import { State, TeamSettings } from './StateContext';
import { decode, encode } from 'universal-base64';
import { EMPTY_TEAM } from './StateContext';

const ID_LENGTH = 3;
const TEAM_SEPARATOR_CHAR = '+';
const SLOT_SEPARATOR_CHAR = '-';

const useBrowserHistoryState = () => {
	const { heroes, weapons } = useContext(DataContext);
	const { encodedState } = useParams<{ encodedState: string | undefined }>();
	const history = useHistory();

	const [state, setInternalState] = useState<State>(hydrateState(decode(encodedState ?? ''), heroes, weapons));

	const setState = useCallback(
		(state: State) => {
			history.push(encode(serializeState(state)));
		},
		[history]
	);

	const clearState = useCallback(() => {
		history.push('');
	}, [history]);

	useEffect(() => {
		setInternalState(hydrateState(decode(encodedState ?? ''), heroes, weapons));
	}, [encodedState, heroes, weapons]);

	useEffect(() => {
		if (process.env.NODE_ENV === 'development') {
			testIdsUnique(heroes, ID_LENGTH);
			testIdsUnique(weapons, ID_LENGTH);
		}
	}, [heroes, weapons]);

	return { state, setState, clearState };
};

// tests if ID's with the configured length are still unique
const testIdsUnique = (items: Array<Hero | Weapon>, idLength: number): void => {
	const ids = items.map((i) => i.sys.id.substr(0, idLength));
	ids.forEach((id, index) => {
		if (ids.slice(index + 1).includes(id)) {
			const item = items.find((i) => i.sys.id.startsWith(id));
			console.warn(`ID of ${item?.name} is not unique`);
		}
	});
};

export default useBrowserHistoryState;

const serializeState = (state: State): string => {
	return state.teams.map(serializeTeam).join(TEAM_SEPARATOR_CHAR);
};

const serializeTeam = (team: TeamSettings): string => {
	return team.slots
		.map(
			(s) =>
				`${s.hero?.sys.id?.substr(0, ID_LENGTH) ?? ''}${SLOT_SEPARATOR_CHAR}${
					s.weapon?.sys.id?.substr(0, ID_LENGTH) ?? ''
				}`
		)
		.concat(team.selectedChain?.toString() ?? '')
		.join(SLOT_SEPARATOR_CHAR);
};

const hydrateState = (serialized: string, heroes: Hero[], weapons: Weapon[]): State => {
	if (serialized) {
		try {
			return {
				teams: deserializeState(serialized).map(({ h0, w0, h1, w1, h2, w2, h3, w3, selectedChain }) => ({
					slots: [
						{ hero: findHeroById(h0, heroes), weapon: findWeaponById(w0, weapons) },
						{ hero: findHeroById(h1, heroes), weapon: findWeaponById(w1, weapons) },
						{ hero: findHeroById(h2, heroes), weapon: findWeaponById(w2, weapons) },
						{ hero: findHeroById(h3, heroes), weapon: findWeaponById(w3, weapons) },
					],
					selectedChain,
				})),
			};
		} catch (err) {
			console.error('could not hydrate state from URL', err);
		}
	}
	return {
		teams: [EMPTY_TEAM],
	};
};

export const deserializeState = (serialized: string) => {
	return serialized.split(TEAM_SEPARATOR_CHAR).map((serializedTeam) => {
		const [h0, w0, h1, w1, h2, w2, h3, w3, c] = serializedTeam.split(SLOT_SEPARATOR_CHAR);
		return {
			h0: h0 || undefined,
			w0: w0 || undefined,
			h1: h1 || undefined,
			w1: w1 || undefined,
			h2: h2 || undefined,
			w2: w2 || undefined,
			h3: h3 || undefined,
			w3: w3 || undefined,
			selectedChain: c?.length ? parseInt(c) : undefined,
		};
	});
};

const findHeroById = (idPart: string | undefined, heroes: Hero[]): Hero | null => {
	if (!idPart) {
		return null;
	}
	return heroes.find((h) => idPart.length && h.sys.id.startsWith(idPart)) ?? null;
};

const findWeaponById = (idPart: string | undefined, weapons: Weapon[]): Weapon | null => {
	if (!idPart) {
		return null;
	}
	return weapons.find((h) => idPart.length && h.sys.id.startsWith(idPart)) ?? null;
};
