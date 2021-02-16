import React, { useContext } from 'react';
import DataContext from '../context/DataContext';
import { Hero } from '../graphql/schema';

interface Props {
	heroes: Array<Hero>;
}

const HeroesBuffSummary = ({ heroes }: Props) => {
	const { heroPartyBuffs } = useContext(DataContext);
	const groupedStatsByBuffId = heroes.reduce<Record<string, number>>((acc, hero) => {
		if (hero?.partyBuff && hero.partyBuffValue) {
			acc[hero.partyBuff.sys.id] = (acc[hero.partyBuff.sys.id] ?? 0) + hero.partyBuffValue;
		}
		return acc;
	}, {});
	return (
		<>
			{heroPartyBuffs
				.filter(({ sys: { id } }) => groupedStatsByBuffId[id])
				.map(({ sys: { id }, name }) => (
					<div key={id}>
						{name}: {groupedStatsByBuffId[id]}%
					</div>
				))}
		</>
	);
};

export default HeroesBuffSummary;
