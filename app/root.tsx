import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration, useLoaderData } from 'remix';
import { getSdk } from './api';
import graphQLClient from './graphQLClient';
import { LoaderFunction } from '@remix-run/server-runtime';
import { Ailment, Data, Element, Hero, HeroPartyBuff, HeroRole, Weapon, WeaponCategory } from '~/types';
import { DynamicLinks, DynamicLinksFunction } from 'remix-utils';

export const loader: LoaderFunction = async () => {
  const { getData } = getSdk(graphQLClient);
  const data = await getData();
  return {
    heroes: data.heroCollection?.items as Hero[],
    heroRoles: data.heroRoleCollection?.items as HeroRole[],
    heroPartyBuffs: data.heroPartyBuffCollection?.items as HeroPartyBuff[],
    weapons: data.weaponCollection?.items as Weapon[],
    weaponCategories: data.weaponCategoryCollection?.items as WeaponCategory[],
    elements: data.elementCollection?.items as Element[],
    ailments: data.ailmentCollection?.items as Ailment[],
  };
};

export const dynamicLinks: DynamicLinksFunction<Data> = ({ data }) => {
  return [
    ...data.heroes.map((hero) => ({ rel: 'preload', href: hero.image.url, as: 'image' })),
    ...data.weapons
      .filter((weapon) => weapon.image)
      .map((weapon) => ({ rel: 'preload', href: weapon.image.url, as: 'image' })),
    ...data.ailments.map((ailment) => ({ rel: 'preload', href: ailment.image.url, as: 'image' })),
    ...data.elements.map((element) => ({ rel: 'preload', href: element.image.url, as: 'image' })),
    ...data.heroRoles.map((role) => ({ rel: 'preload', href: role.image.url, as: 'image' })),
    ...data.weaponCategories.map((cat) => ({ rel: 'preload', href: cat.image.url, as: 'image' })),
  ];
};

export const handle = {
  dynamicLinks,
};

export default function App() {
  const data = useLoaderData<Data>();

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>GT Team Planner</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=0.5, minimum-scale=0.5, maximum-scale=0.5" />
        <meta name="keywords" content="Guardian Tales, GT, Team Planner, Party Builder" />
        <meta
          name="description"
          content="Online team planning tool for Guardian Tales: select your heroes and weapons, see party buffs and possible chain skill combinations, share your setup via URL."
        />
        <Meta />
        <DynamicLinks />
        <Links />
      </head>
      <body>
        <Outlet context={data} />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  );
}
