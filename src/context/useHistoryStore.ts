import { useContext } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import DataContext, { Hero, Weapon } from './DataContext';
import { State, SlotData } from './StateContext';
import { decode, encode } from 'universal-base64';

const ID_LENGTH = 5;

const useHistoryStore = () => {
	const { slug } = useParams<{ slug: string | undefined }>();
	const history = useHistory();

	const { heroes, weapons } = useContext(DataContext);

	if (process.env.NODE_ENV === 'development') {
		testIdsUnique(heroes, ID_LENGTH);
		testIdsUnique(weapons, ID_LENGTH);
	}

	const findHero = (idPart: string): Hero | null =>
		heroes.find((h) => idPart.length && h.sys.id.startsWith(idPart)) ?? null;

	const findWeapon = (idPart: string): Weapon | null =>
		weapons.find((h) => idPart.length && h.sys.id.startsWith(idPart)) ?? null;

	const hydrateState = (): State => {
		if (slug) {
			try {
				const decoded = decodeSlug(slug);
				return {
					slots: [
						{ hero: findHero(decoded.h0), weapon: findWeapon(decoded.w0) },
						{ hero: findHero(decoded.h1), weapon: findWeapon(decoded.w1) },
						{ hero: findHero(decoded.h2), weapon: findWeapon(decoded.w2) },
						{ hero: findHero(decoded.h3), weapon: findWeapon(decoded.w3) },
					],
					selectedChain: decoded.chain,
				};
			} catch (err) {
				console.error('could not hydrate state from slug', err);
			}
		}
		return {
			slots: [
				{ hero: null, weapon: null },
				{ hero: null, weapon: null },
				{ hero: null, weapon: null },
				{ hero: null, weapon: null },
			],
			selectedChain: undefined,
		};
	};

	const updateStore = (state: State) => {
		history.push(encodeSlug(state.slots, state.selectedChain));
	};

	const clearStore = () => {
		history.push('');
	};

	return { hydrateState, updateStore, clearStore };
};

const encodeSlug = (slots: SlotData[], selectedChain?: number): string => {
	return encode(
		slots
			.map((s) => `${s.hero?.sys.id?.substr(0, ID_LENGTH) ?? ''}-${s.weapon?.sys.id?.substr(0, ID_LENGTH) ?? ''}`)
			.concat(selectedChain?.toString() ?? '')
			.join('-')
	);
};

export const decodeSlug = (slug: string) => {
	const [h0, w0, h1, w1, h2, w2, h3, w3, c] = decode(slug).split('-');
	return { h0, w0, h1, w1, h2, w2, h3, w3, chain: c?.length ? parseInt(c) : undefined };
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
