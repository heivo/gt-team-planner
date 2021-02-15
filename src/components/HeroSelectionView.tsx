import React, { useContext } from 'react';
import DataContext from '../context/DataContext';
import styles from '../style.module.scss';

function HeroSelectionView() {
	const { heroes } = useContext(DataContext);
	console.log(heroes);
	return (
		<div className={styles['hero-selection-wrapper']}>
			{heroes.map((hero) => (
				<div key={hero.name} className={styles['hero-selection-item']}>
					<img src={hero.image.url} alt={hero?.name} />
				</div>
			))}
		</div>
	);
}

export default HeroSelectionView;
