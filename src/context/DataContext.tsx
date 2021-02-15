import React from 'react';
import { useGetDataQuery, GetDataQuery, Hero, Weapon } from '../graphql/schema';

const DataContext = React.createContext<{
	heroes: Hero[];
	weapons: Weapon[];
}>({ heroes: [], weapons: [] });

export default DataContext;

interface Props {
	children: React.ReactNode;
}

export const DataContextProvider = ({ children }: Props) => {
	const { data } = useGetDataQuery<GetDataQuery>({
		endpoint: process.env.REACT_APP_GQL_ENDPOINT ?? '',
		fetchParams: {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
			},
		},
	});
	if (!data || !data.heroCollection || !data.weaponCollection) {
		return null;
	}
	return (
		<DataContext.Provider
			value={{
				heroes: data.heroCollection.items as Hero[],
				weapons: data.weaponCollection.items as Weapon[],
			}}
		>
			{children}
		</DataContext.Provider>
	);
};
