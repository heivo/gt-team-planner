import React from 'react';
import { useGetDataQuery, GetDataQuery, Hero, Weapon } from '../graphql/schema';
import { DeepNonNullable } from '../utils/types';

const DataContext = React.createContext<{
	heroes: DeepNonNullable<Hero>[];
	weapons: DeepNonNullable<Weapon>[];
}>({ heroes: [], weapons: [] });

export default DataContext;

interface Props {
	children: React.ReactNode;
}

export const DataContextProvider = ({ children }: Props) => {
	const { data } = useGetDataQuery<DeepNonNullable<GetDataQuery>>({
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
				heroes: data.heroCollection.items as DeepNonNullable<Hero>[],
				weapons: data.weaponCollection.items as DeepNonNullable<Weapon>[],
			}}
		>
			{children}
		</DataContext.Provider>
	);
};
