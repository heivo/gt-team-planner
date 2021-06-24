import React from 'react';

import MainView from './components/MainView';
import DataContext, {
	Hero,
	HeroRole,
	HeroPartyBuff,
	Weapon,
	Element,
	Ailment,
	WeaponCategory,
} from './context/DataContext';
import { StateContextProvider } from './context/StateContext';
import { GetDataDocument, GetDataQuery } from './graphql/schema';
import graphQLClient from './graphQLClient';
import MetaTags from './components/MetaTags';

const App = (props: GetDataQuery) => {
	return (
		<DataContext.Provider
			value={{
				heroes: props.heroCollection?.items as Hero[],
				heroRoles: props.heroRoleCollection?.items as HeroRole[],
				heroPartyBuffs: props.heroPartyBuffCollection?.items as HeroPartyBuff[],
				weapons: props.weaponCollection?.items as Weapon[],
				weaponCategories: props.weaponCategoryCollection?.items as WeaponCategory[],
				elements: props.elementCollection?.items as Element[],
				ailments: props.ailmentCollection?.items as Ailment[],
			}}
		>
			<StateContextProvider>
				<MetaTags />
				<MainView />
			</StateContextProvider>
		</DataContext.Provider>
	);
};

// only execute this query once on the client
const dataPromise = graphQLClient.request<GetDataQuery>(GetDataDocument);

App.getInitialProps = (): Promise<GetDataQuery> => dataPromise;

export default App;
