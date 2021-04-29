import React, { useContext } from 'react';
import DataContext, { Hero, HeroPartyBuff } from '../context/DataContext';
import styles from '../style.module.scss';

interface Props {
	heroes: Array<Hero>;
}

interface BuffStats {
	buff: HeroPartyBuff;
	value: number;
	heroes: Array<Hero>;
}

const PartyBuffSummary = ({ heroes }: Props) => {
	const { heroPartyBuffs } = useContext(DataContext);
	const groupedStatsByBuffId: Record<string, BuffStats> = heroes.reduce<Record<string, BuffStats>>((acc, hero) => {
		const buff = hero.partyBuff;
		const stats: BuffStats = acc[buff.sys.id] ?? { buff, value: 0, heroes: [] };
		stats.heroes.push(hero);
		stats.value += hero.partyBuffValue;
		acc[buff.sys.id] = stats;
		if (hero.partyBuff2) {
			const buff = hero.partyBuff2;
			const stats: BuffStats = acc[buff.sys.id] ?? { buff, value: 0, heroes: [] };
			stats.heroes.push(hero);
			stats.value += hero.partyBuffValue2;
			acc[buff.sys.id] = stats;
		}
		return acc;
	}, {});
	return (
		<div className={styles.partyBuffSummary}>
			{heroPartyBuffs
				.filter(({ sys: { id } }) => groupedStatsByBuffId[id])
				.map(({ sys: { id }, name }) => (
					<div key={id}>
						<strong>{name}:</strong> {groupedStatsByBuffId[id].value}%
						<i style={{ float: 'right' }}>
							({groupedStatsByBuffId[id].heroes.map((hero) => hero.name).join(', ')})
						</i>
					</div>
				))}
			{!heroes.length && <i>no party buffs</i>}
		</div>
	);
};

export default PartyBuffSummary;
