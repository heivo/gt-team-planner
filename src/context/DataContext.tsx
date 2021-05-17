import React from 'react';
import { GetDataQuery } from '../graphql/schema';
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
