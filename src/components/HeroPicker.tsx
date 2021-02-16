import React, { useContext } from 'react';
import DataContext from '../context/DataContext';
import { Hero } from '../graphql/schema';
import styles from '../style.module.scss';
import classnames from 'classnames';

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
		<div className={styles['hero-picker-wrapper']}>
			{heroes.map((hero) => (
				<div
					key={hero.name}
					className={classnames(styles['hero-picker-item'], {
						[styles['hero-picker-item-locked']]: lockedHeros.includes(hero),
					})}
					onClick={() => handleSelectHero(hero)}
				>
					{hero.image?.url && <img src={hero.image.url} alt={hero.name ?? ''} />}
				</div>
			))}
		</div>
	);
}

export default HeroPicker;
