import { DeepNonNullable, ValuesType } from 'utility-types';
import { GeneratedGetDataQuery } from './api';
import { DeepOmit } from './utils/typeUtils';

/**
 * Constructs a type from the elements in a collection and makes all fields non-nullable.
 *
 * Contentful's GraphQL schema only has optional types because it uses the same schema for the preview API whereas our
 * content model defines almost every field as required.
 */
type ConstructType<T extends Array<unknown>> = ValuesType<Required<DeepNonNullable<DeepOmit<T, '__typename'>>>>;

export type Hero = ConstructType<NonNullable<NonNullable<GeneratedGetDataQuery['heroCollection']>['items']>>;

export type HeroRole = ConstructType<NonNullable<NonNullable<GeneratedGetDataQuery['heroRoleCollection']>['items']>>;

export type HeroPartyBuff = ConstructType<
  NonNullable<NonNullable<GeneratedGetDataQuery['heroPartyBuffCollection']>['items']>
>;

export type Weapon = ConstructType<NonNullable<NonNullable<GeneratedGetDataQuery['weaponCollection']>['items']>>;

export type WeaponCategory = ConstructType<
  NonNullable<NonNullable<GeneratedGetDataQuery['weaponCategoryCollection']>['items']>
>;

export type Element = ConstructType<NonNullable<NonNullable<GeneratedGetDataQuery['elementCollection']>['items']>>;

export type Ailment = ConstructType<NonNullable<NonNullable<GeneratedGetDataQuery['ailmentCollection']>['items']>>;

export interface Data {
  heroes: Hero[];
  heroRoles: HeroRole[];
  heroPartyBuffs: HeroPartyBuff[];
  weapons: Weapon[];
  weaponCategories: WeaponCategory[];
  elements: Element[];
  ailments: Ailment[];
}
