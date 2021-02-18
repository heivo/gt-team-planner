import React, { useContext, useMemo } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import DataContext, { Hero, Weapon } from './DataContext';

export interface SlotData {
	hero: Hero | null;
	weapon: Weapon | null;
}

const StateContext = React.createContext<{
	slots: SlotData[];
	selectHero: (slotNumber: number, hero: Hero) => void;
	reset: () => void;
	// eslint-disable-next-line @typescript-eslint/no-empty-function
}>({ slots: [], selectHero: () => {}, reset: () => {} });

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
		slots[slotNumber] = { hero, weapon };
		updateStore(slots);
	};

	const reset = () => {
		clearStore();
	};

	return <StateContext.Provider value={{ slots, selectHero, reset }}>{children}</StateContext.Provider>;
};

const useHistoryStore = () => {
	const { slug } = useParams<{ slug: string | undefined }>();
	const history = useHistory();

	const { heroes, weapons } = useContext(DataContext);

	const findHero = (idPart: string): Hero | null =>
		heroes.find((h) => idPart.length && h.sys.id.startsWith(idPart)) ?? null;

	const findWeapon = (idPart: string): Weapon | null =>
		weapons.find((h) => idPart.length && h.sys.id.startsWith(idPart)) ?? null;

	const hydrateSlots = (): SlotData[] => {
		if (slug) {
			try {
				const decoded = decode(slug);
				return [
					{ hero: findHero(decoded.h0), weapon: findWeapon(decoded.w0) },
					{ hero: findHero(decoded.h1), weapon: findWeapon(decoded.w1) },
					{ hero: findHero(decoded.h2), weapon: findWeapon(decoded.w2) },
					{ hero: findHero(decoded.h3), weapon: findWeapon(decoded.w3) },
				];
			} catch (err) {
				console.error('could not hydrate state from slug', err);
			}
		}
		return [
			{ hero: null, weapon: null },
			{ hero: null, weapon: null },
			{ hero: null, weapon: null },
			{ hero: null, weapon: null },
		];
	};

	const updateStore = (slots: SlotData[]) => {
		history.push(encode(slots, 5));
	};

	const clearStore = () => {
		history.push('');
	};

	const encode = (slots: SlotData[], idLength = 99): string => {
		return btoa(
			slots
				.map(
					(x) => `${x.hero?.sys.id?.substr(0, idLength) ?? ''}-${x.weapon?.sys.id?.substr(0, idLength) ?? ''}`
				)
				.join('-')
		);
	};

	const decode = (slug: string) => {
		const [h0, w0, h1, w1, h2, w2, h3, w3] = atob(slug).split('-');
		return { h0, w0, h1, w1, h2, w2, h3, w3 };
	};

	return { hydrateSlots, updateStore, clearStore };
};
