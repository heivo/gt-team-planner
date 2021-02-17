import React, { useContext } from 'react';
import DataContext, { Hero } from '../context/DataContext';
import styles from '../style.module.scss';
import HeroBadge from './HeroBadge';

interface Props {
	lockedHeros: Hero[];
	onSelect: (hero: Hero) => void;
}

function HeroPicker({ lockedHeros, onSelect }: Props) {
	const { heroes } = useContext(DataContext);

	const handleSelectHero = (hero: Hero) => {
		if (!lockedHeros.includes(hero)) {
			onSelect(hero);
		}
	};

	return (
		<div className={styles.heroPicker}>
			{heroes.map((hero) => (
				<div key={hero.sys.id} className={styles.badgeWrapper}>
					<HeroBadge hero={hero} locked={lockedHeros.includes(hero)} onClick={() => handleSelectHero(hero)} />
				</div>
			))}
		</div>
	);
}

export default HeroPicker;
