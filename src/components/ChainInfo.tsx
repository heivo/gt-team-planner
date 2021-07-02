import React, { useContext, useMemo } from 'react';
import { Hero, Weapon } from '../context/DataContext';
import styles from '../style.module.scss';
import permutations from '../utils/permutations';
import StateContext, { TeamSettings } from '../context/StateContext';
import FlipMove from 'react-flip-move';
import Chain from './Chain';
import { isNotNull } from '../utils/typeUtils';

interface Props {
	settings: TeamSettings;
	teamNumber: number;
}

const extractValidChain = (chain: Hero[], weapon: Weapon | null | undefined): Hero[] => {
	if (!weapon) {
		return [];
	}
	let currentAilmentId = weapon.ailment.sys.id;
	for (let i = 0; i < chain.length; i++) {
		if (chain[i].chainAilmentStart.isAny || chain[i].chainAilmentStart.sys.id === currentAilmentId) {
			currentAilmentId = chain[i].chainAilmentEnd.sys.id;
		} else {
			return chain.slice(0, i);
		}
	}
	return chain;
};

const chainKey = (chain: Hero[]): string => chain.map((hero) => hero.sys.id).join('-');

const ChainInfo = ({ settings, teamNumber }: Props) => {
	const { teams, setSelectedChain } = useContext(StateContext);

	const chains = useMemo(() => {
		const heroes = settings.slots.map((slot) => slot.hero).filter(isNotNull);
		const weapon = settings.slots.map((slot) => slot.weapon).find(isNotNull);

		return permutations(heroes)
			.map((chain) => extractValidChain(chain, weapon))
			.filter((chain) => chain.length >= 3)
			.map((heroes, index) => ({
				heroes,
				key: chainKey(heroes),
				selected: teams[teamNumber].selectedChain === index,
				onSelect: () => {
					console.log(teams[teamNumber].selectedChain, index);
					setSelectedChain(teamNumber, teams[teamNumber].selectedChain !== index ? index : undefined);
				},
			}))
			.sort((c1, c2) => {
				if (c1.selected) {
					return -1;
				} else if (c2.selected) {
					return 1;
				}
				return c2.heroes.length - c1.heroes.length;
			});
	}, [setSelectedChain, settings.slots, teams, teamNumber]);

	return (
		<div className={styles.chainInfo}>
			{chains.length ? <strong>Possible chains:</strong> : <i>no possible chains</i>}
			<FlipMove>
				{chains.map(({ heroes, key, selected, onSelect }) => (
					<Chain key={key} heroes={heroes} selected={selected} onClick={onSelect} />
				))}
			</FlipMove>
		</div>
	);
};

export default ChainInfo;
