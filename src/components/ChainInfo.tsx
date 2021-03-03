import React from 'react';
import { Hero, Weapon } from '../context/DataContext';
import styles from '../style.module.scss';
import permutations from '../utils/permutations';
import HeroBadge from './HeroBadge';

interface Props {
	heroes: Hero[];
	weapon: Weapon | null;
}

const extractValidChain = (chain: Hero[], weapon: Weapon): Hero[] => {
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

const ChainInfo = ({ heroes, weapon }: Props) => {
	const chains =
		weapon !== null
			? permutations(heroes)
					.map((chain) => extractValidChain(chain, weapon))
					.filter((chain) => chain.length >= 3)
					.sort((c1, c2) => c2.length - c1.length)
			: [];

	return (
		<div className={styles.chainInfo}>
			{chains.length ? <strong>Possible chains:</strong> : <i>no possible chains</i>}
			{chains.map((chain, i) => (
				<div key={i} className={styles.chain}>
					{chain.map((hero, i) => (
						<React.Fragment key={hero.sys.id}>
							{i > 0 && <span className={styles.chainArrow}>➞</span>}
							<HeroBadge  hero={hero} size={100} />
						</React.Fragment>
					))}
				</div>
			))}
		</div>
	);
};

export default ChainInfo;
