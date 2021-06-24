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
import { Helmet } from 'react-helmet';
import { GetDataDocument, GetDataQuery } from './graphql/schema';
import graphQLClient from './graphQLClient';

interface Props extends GetDataQuery {}

const App = (props: Props) => {
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
				<Helmet>
					<title>GT Team Planner</title>
					<meta
						name="description"
						content="Online team planning tool for Guardian Tales: select your heroes and weapons, see party buffs and possible chain skill combinations, share your setup via URL."
					/>
					<meta name="keywords" content="Guardian Tales, Team Planner, Party Builder, Tool" />
					<meta
						name="viewport"
						content="width=device-width, initial-scale=0.5, minimum-scale=0.5, maximum-scale=0.5"
					/>
					<meta name="theme-color" content="#000000" />
				</Helmet>
				<MainView />
			</StateContextProvider>
		</DataContext.Provider>
	);
};

const dataPromise = graphQLClient.request<GetDataQuery>(GetDataDocument);

App.getInitialProps = (): Promise<GetDataQuery> => dataPromise;

export default App;
