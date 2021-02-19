import React, { useContext } from 'react';
import DataContext, { Hero } from '../context/DataContext';
import styles from '../style.module.scss';

interface Props {
	heroes: Array<Hero>;
}

const PartyBuffSummary = ({ heroes }: Props) => {
	const { heroPartyBuffs } = useContext(DataContext);
	const groupedStatsByBuffId = heroes.reduce<Record<string, number>>((acc, hero) => {
		acc[hero.partyBuff.sys.id] = (acc[hero.partyBuff.sys.id] ?? 0) + hero.partyBuffValue;
		if (hero.partyBuff2 && hero.partyBuffValue2) {
			acc[hero.partyBuff2.sys.id] = (acc[hero.partyBuff2.sys.id] ?? 0) + hero.partyBuffValue2;
		}
		return acc;
	}, {});
	return (
		<div className={styles.partyBuffSummary}>
			{heroPartyBuffs
				.filter(({ sys: { id } }) => groupedStatsByBuffId[id])
				.map(({ sys: { id }, name }) => (
					<div key={id}>
						<strong>{name}:</strong> {groupedStatsByBuffId[id]}%
					</div>
				))}
			{!heroes.length && <i>no party buffs</i>}
		</div>
	);
};

export default PartyBuffSummary;
