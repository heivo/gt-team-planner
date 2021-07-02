import React, { useContext } from 'react';
import styles from '../../style.module.scss';
import DataContext, { Ailment, Element, Hero, HeroRole } from '../../context/DataContext';
import cn from 'classnames';
import ChainIcon from './ChainIcon';

interface Props {
	hero: Hero | null;
	onClick?: () => void;
	faded?: boolean;
	size?: number;
}

const HeroBadge = ({ hero, onClick, faded = false, size = 150 }: Props) => {
	const { ailments, heroRoles, elements, weaponCategories } = useContext(DataContext);

	if (!hero) {
		return (
			<div
				className={styles.heroBadge}
				onClick={onClick}
				style={{ width: size, height: size, cursor: onClick ? 'pointer' : 'default' }}
			>
				<i>&lt;click here&gt;</i>
			</div>
		);
	}

	const ailmentStart = ailments.find((a) => a.sys.id === hero.chainAilmentStart.sys.id) as Ailment;
	const ailmentEnd = ailments.find((a) => a.sys.id === hero.chainAilmentEnd.sys.id) as Ailment;
	const role = heroRoles.find((r) => r.sys.id === hero.role.sys.id) as HeroRole;
	const element = elements.find((e) => e.sys.id === hero.element.sys.id) as Element;

	const tooltip = `
		${hero.name}<br /><br /><br />
		Element: ${hero.element.name}<br />
		Role: ${hero.role.name}<br />
		Weapon(s): ${hero.weaponCategoriesCollection.items
			.map((cat) => weaponCategories.find((wc) => wc.sys.id === cat.sys.id))
			.map((cat) => cat?.name)
			.join(', ')}<br />
		Group Buff: ${hero.partyBuff.name}: ${hero.partyBuffValue}%
		${hero.partyBuff2 ? `, ${hero.partyBuff2.name}: ${hero.partyBuffValue2}%` : ''}<br />
		Chain Skill: ${hero.chainAilmentStart.name} → ${hero.chainAilmentEnd.name}
	`;

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
			data-tip={tooltip}
		>
			<div className={styles.heroBadgeElementRoleContainer} style={{ width: size / 5 }}>
				<img src={element.image.url} alt={element.name} />
				<img src={role.image.url} alt={role.name} />
			</div>
			<div className={styles.heroBadgeChainContainer}>
				<ChainIcon ailmentStart={ailmentStart} ailmentEnd={ailmentEnd} size={size / 3} />
			</div>
		</div>
	);
};

export default HeroBadge;
