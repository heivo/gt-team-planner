import React from 'react';
import {
	useGetDataQuery,
	Hero,
	Weapon,
	WeaponCategory,
	HeroRole,
	Element,
	Ailment,
	HeroPartyBuff,
} from '../graphql/schema';

const DataContext = React.createContext<{
	heroes: Hero[];
	heroRoles: HeroRole[];
	heroPartyBuffs: HeroPartyBuff[];
	weapons: Weapon[];
	weaponCategories: WeaponCategory[];
	elements: Element[];
	ailments: Ailment[];
}>({ heroes: [], heroRoles: [], heroPartyBuffs: [], weapons: [], weaponCategories: [], elements: [], ailments: [] });

export default DataContext;

interface Props {
	children: React.ReactNode;
}

export const DataContextProvider = ({ children }: Props) => {
	const { data } = useGetDataQuery({
		endpoint: process.env.REACT_APP_GQL_ENDPOINT ?? '',
		fetchParams: {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
			},
		},
	});
	if (!data) {
		return null;
	}
	return (
		<DataContext.Provider
			value={{
				heroes: data.heroCollection?.items as Hero[],
				heroRoles: data.heroRoleCollection?.items as HeroRole[],
				heroPartyBuffs: data.heroPartyBuffCollection?.items as HeroPartyBuff[],
				weapons: data.weaponCollection?.items as Weapon[],
				weaponCategories: data.weaponCategoryCollection?.items as WeaponCategory[],
				elements: data.elementCollection?.items as Element[],
				ailments: data.ailmentCollection?.items as Ailment[],
			}}
		>
			{children}
		</DataContext.Provider>
	);
};
