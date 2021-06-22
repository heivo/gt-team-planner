import { useContext } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import DataContext, { Hero, Weapon } from './DataContext';
import { State, Team, Slot } from './StateContext';
import { decode, encode } from 'universal-base64';

const ID_LENGTH = 5;
const TEAM_SEPARATOR_CHAR = '+';
const SLOT_SEPARATOR_CHAR = '-';

const useHistoryStore = () => {
	const { encodedState } = useParams<{ encodedState: string | undefined }>();
	const history = useHistory();

	const { heroes, weapons } = useContext(DataContext);

	const readState = (): State => {
		if (encodedState) {
			try {
				return {
					teams: decodeState(encodedState).map(({ h0, w0, h1, w1, h2, w2, h3, w3, selectedChain }) => ({
						slots: [
							{ hero: findHero(h0), weapon: findWeapon(w0) },
							{ hero: findHero(h1), weapon: findWeapon(w1) },
							{ hero: findHero(h2), weapon: findWeapon(w2) },
							{ hero: findHero(h3), weapon: findWeapon(w3) },
						],
						selectedChain,
					})),
				};
			} catch (err) {
				console.error('could not hydrate state from URL', err);
			}
		}
		return {
			teams: [
				{
					slots: [
						{ hero: null, weapon: null },
						{ hero: null, weapon: null },
						{ hero: null, weapon: null },
						{ hero: null, weapon: null },
					],
					selectedChain: undefined,
				},
			],
		};
	};

	const findHero = (idPart: string): Hero | null =>
		heroes.find((h) => idPart.length && h.sys.id.startsWith(idPart)) ?? null;

	const findWeapon = (idPart: string): Weapon | null =>
		weapons.find((h) => idPart.length && h.sys.id.startsWith(idPart)) ?? null;

	const writeState = (state: State) => {
		history.push(encode(serializeState(state)));
	};

	const clearState = () => {
		history.push('');
	};

	if (process.env.NODE_ENV === 'development') {
		testIdsUnique(heroes, ID_LENGTH);
		testIdsUnique(weapons, ID_LENGTH);
	}

	return { readState, writeState, clearState };
};

const serializeState = (state: State): string => {
	return state.teams.map(serializeTeam).join(TEAM_SEPARATOR_CHAR);
};

const serializeTeam = (team: Team): string => {
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

export const decodeState = (encodedState: string) => {
	return decode(encodedState)
		.split(TEAM_SEPARATOR_CHAR)
		.map((serializedTeam) => {
			const [h0, w0, h1, w1, h2, w2, h3, w3, c] = serializedTeam.split(SLOT_SEPARATOR_CHAR);
			return { h0, w0, h1, w1, h2, w2, h3, w3, selectedChain: c?.length ? parseInt(c) : undefined };
		});
};

const testIdsUnique = (items: Array<Hero | Weapon>, idLength: number): void => {
	const ids = items.map((i) => i.sys.id.substr(0, idLength));
	ids.forEach((id, index) => {
		if (ids.slice(index + 1).includes(id)) {
			const item = items.find((i) => i.sys.id.startsWith(id));
			console.warn(`ID of ${item?.name} is not unique`);
		}
	});
};

export default useHistoryStore;
