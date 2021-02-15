import React, { useContext } from 'react';
import DataContext from '../context/DataContext';
import { Hero } from '../graphql/schema';
import styles from '../style.module.scss';
import classnames from 'classnames';

interface Props {
	locked: Hero[];
	onSelect: (hero: Hero) => void;
}

function HeroPicker({ locked, onSelect }: Props) {
	const { heroes } = useContext(DataContext);
	return (
		<div className={styles['hero-picker-wrapper']}>
			{heroes.map((hero) => (
				<div
					key={hero.name}
					className={classnames(styles['hero-picker-item'], {
						[styles['hero-picker-item-locked']]: locked.includes(hero),
					})}
					onClick={() => onSelect(hero)}
				>
					{hero.image?.url && <img src={hero.image.url} alt={hero.name ?? ''} />}
				</div>
			))}
		</div>
	);
}

export default HeroPicker;
