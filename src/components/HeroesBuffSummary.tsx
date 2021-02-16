import React from 'react';
import { Hero } from '../graphql/schema';

interface Props {
	heroes: Array<Hero | undefined>;
}

const HeroesBuffSummary = ({ heroes }: Props) => {
	const groupedStats = heroes.reduce<Record<string, number>>((acc, hero) => {
		if (hero?.partyBuff?.name && hero.partyBuffValue) {
			acc[hero.partyBuff.name] = (acc[hero.partyBuff.name] ?? 0) + hero.partyBuffValue;
		}
		return acc;
	}, {});
	return (
		<>
			{Object.entries(groupedStats).map(([name, value]) => (
				<div key={name}>
					{name}: {value}%
				</div>
			))}
		</>
	);
};

export default HeroesBuffSummary;
