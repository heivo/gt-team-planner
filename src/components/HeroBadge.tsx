import React, { useContext } from 'react';
import styles from '../style.module.scss';
import DataContext, { Hero } from '../context/DataContext';
import cn from 'classnames';
import ChainIcon from './ChainIcon';

interface Props {
	hero: Hero | null;
	onClick?: () => void;
	locked?: boolean;
	size?: number;
}

const HeroBadge = ({ hero, onClick, locked = false, size = 150 }: Props) => {
	const { ailments } = useContext(DataContext);
	const ailmentStart = ailments.find((a) => a.sys.id === hero?.chainAilmentStart?.sys.id);
	const ailmentEnd = ailments.find((a) => a.sys.id === hero?.chainAilmentEnd?.sys.id);

	return (
		<div
			className={cn(styles.heroBadge, { [styles.locked]: locked })}
			onClick={onClick}
			style={{
				backgroundImage: hero?.image.url ? `url(${hero.image.url})` : undefined,
				width: size,
				height: size,
			}}
			title={hero?.name ?? undefined}
		>
			{hero ? (
				<div className={styles.heroBadgeChainContainer}>
					{ailmentStart && ailmentEnd && <ChainIcon ailmentStart={ailmentStart} ailmentEnd={ailmentEnd} />}
				</div>
			) : (
				<i>&lt;empty&gt;</i>
			)}
		</div>
	);
};

export default HeroBadge;
