import React, { useContext, forwardRef } from 'react';
import { Hero, Weapon } from '../context/DataContext';
import styles from '../style.module.scss';
import permutations from '../utils/permutations';
import StateContext from '../context/StateContext';
import FlipMove from 'react-flip-move';
import Chain from './Chain';

interface Props {
	heroes: Hero[];
	weapon: Weapon | null;
}

const extractValidChain = (chain: Hero[], weapon: Weapon | null): Hero[] => {
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

const ChainInfo = ({ heroes, weapon }: Props) => {
	const { selectedChain, setSelectedChain } = useContext(StateContext);

	const chains = permutations(heroes)
		.map((chain) => extractValidChain(chain, weapon))
		.filter((chain) => chain.length >= 3)
		.map((heroes, index) => ({
			heroes,
			key: chainKey(heroes),
			selected: selectedChain === index,
			onSelect: () => setSelectedChain(selectedChain !== index ? index : undefined),
		}))
		.sort((c1, c2) => {
			if (c1.selected) {
				return -1;
			} else if (c2.selected) {
				return 1;
			}
			return c2.heroes.length - c1.heroes.length;
		});

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
