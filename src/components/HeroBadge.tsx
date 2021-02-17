import React, { useContext } from 'react';
import styles from '../style.module.scss';
import { Ailment, Hero } from '../graphql/schema';
import DataContext from '../context/DataContext';
import cn from 'classnames';
import Chain from './Chain';

interface Props {
	hero: Hero | null;
	onClick?: () => void;
	locked?: boolean;
}

const HeroBadge = ({ hero, onClick, locked = false }: Props) => {
	const { ailments } = useContext(DataContext);
	const ailmentStart = ailments.find((a) => a.sys.id === hero?.chainAilmentStart?.sys.id);
	const ailmentEnd = ailments.find((a) => a.sys.id === hero?.chainAilmentEnd?.sys.id);

	return (
		<div
			className={cn(styles.heroBadge, { [styles.locked]: locked })}
			onClick={onClick}
			style={{ backgroundImage: hero?.image?.url ? `url(${hero.image.url})` : undefined }}
			title={hero?.name ?? undefined}
		>
			{hero ? (
				<div className={styles.heroBadgeChainContainer}>
					{ailmentStart && ailmentEnd && <Chain ailmentStart={ailmentStart} ailmentEnd={ailmentEnd} />}
				</div>
			) : (
				'<empty>'
			)}
		</div>
	);
};

export default HeroBadge;
