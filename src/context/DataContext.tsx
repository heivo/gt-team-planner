import React from 'react';
import { useGetDataQuery, GetDataQuery } from '../graphql/schema';
import { DeepOmit } from '../utils/typeUtils';
import { DeepNonNullable, ValuesType } from 'utility-types';

/**
 * Constructs a type from the elements in a collection and makes all fields non-nullable.
 *
 * Contentful's GraphQL schema only has optional types because it uses the same schema for the preview API whereas our
 * content model defines almost every field as required.
 */
type ConstructType<T extends Array<unknown>> = ValuesType<Required<DeepNonNullable<DeepOmit<T, '__typename'>>>>;

export type Hero = ConstructType<NonNullable<NonNullable<GetDataQuery['heroCollection']>['items']>>;
export type HeroRole = ConstructType<NonNullable<NonNullable<GetDataQuery['heroRoleCollection']>['items']>>;
export type HeroPartyBuff = ConstructType<NonNullable<NonNullable<GetDataQuery['heroPartyBuffCollection']>['items']>>;
export type Weapon = ConstructType<NonNullable<NonNullable<GetDataQuery['weaponCollection']>['items']>>;
export type WeaponCategory = ConstructType<NonNullable<NonNullable<GetDataQuery['weaponCategoryCollection']>['items']>>;
export type Element = ConstructType<NonNullable<NonNullable<GetDataQuery['elementCollection']>['items']>>;
export type Ailment = ConstructType<NonNullable<NonNullable<GetDataQuery['ailmentCollection']>['items']>>;

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
		endpoint: process.env.RAZZLE_GQL_ENDPOINT ?? '',
		fetchParams: {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${process.env.RAZZLE_API_TOKEN}`,
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
