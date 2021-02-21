import React, { useContext } from 'react';
import styles from '../style.module.scss';
import DataContext, { Ailment, Element, Hero, HeroRole } from '../context/DataContext';
import cn from 'classnames';
import ChainIcon from './ChainIcon';

interface Props {
	hero: Hero | null;
	onClick?: () => void;
	faded?: boolean;
	size?: number;
}

const HeroBadge = ({ hero, onClick, faded = false, size = 150 }: Props) => {
	const { ailments, heroRoles, elements } = useContext(DataContext);

	if (!hero) {
		return (
			<div
				className={styles.heroBadge}
				onClick={onClick}
				style={{ width: size, height: size, cursor: onClick ? 'pointer' : 'default' }}
			>
				<i>&lt;empty&gt;</i>
			</div>
		);
	}

	const ailmentStart = ailments.find((a) => a.sys.id === hero.chainAilmentStart.sys.id) as Ailment;
	const ailmentEnd = ailments.find((a) => a.sys.id === hero.chainAilmentEnd.sys.id) as Ailment;
	const role = heroRoles.find((r) => r.sys.id === hero.role.sys.id) as HeroRole;
	const element = elements.find((e) => e.sys.id === hero.element.sys.id) as Element;

	return (
		<div
			className={cn(styles.heroBadge, { [styles.faded]: faded })}
			onClick={onClick}
			style={{
				backgroundImage: `url(${hero.image.url})`,
				width: size,
				height: size,
				cursor: onClick ? 'pointer' : 'default',
			}}
			title={hero.name}
		>
			<div className={styles.heroBadgeElementRoleContainer} style={{ width: size / 5 }}>
				<img src={element.image.url} title={element.name} alt={element.name} />
				<img src={role.image.url} title={role.name} alt={role.name} />
			</div>
			<div className={styles.heroBadgeChainContainer}>
				<ChainIcon ailmentStart={ailmentStart} ailmentEnd={ailmentEnd} size={size / 3} />
			</div>
		</div>
	);
};

export default HeroBadge;
