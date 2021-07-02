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

const getData = () => graphQLClient.request<GetDataQuery>(GetDataDocument);

let clientData: Promise<GetDataQuery>;

App.getInitialProps = (): Promise<GetDataQuery> => {
	// always refetch on the server but fetch only once on the client
	if (process.env.BUILD_TARGET === 'server') {
		return getData();
	} else {
		if (!clientData) {
			clientData = getData();
		}
		return clientData;
	}
};

export default App;
