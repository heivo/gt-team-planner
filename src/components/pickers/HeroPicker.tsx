import React, { useContext, useMemo, useState } from 'react';
import DataContext, { Element, Hero, HeroPartyBuff, HeroRole } from '../../context/DataContext';
import styles from '../../style.module.scss';
import CloseButton from './CloseButton';
import ElementFilter from './ElementFilter';
import HeroBadge from '../HeroBadge';
import RoleFilter from './RoleFilter';
import ReactTooltip from 'react-tooltip';
import Select from 'react-select';
import StateContext from '../../context/StateContext';

interface Props {
	currentHero: Hero | null;
	onSelect: (hero: Hero) => void;
	onClose: () => void;
}

function HeroPicker({ currentHero, onSelect, onClose }: Props) {
	const { heroes, heroPartyBuffs } = useContext(DataContext);
	const { findHero } = useContext(StateContext);

	const [elementFilter, setElementFilter] = useState<Element>();
	const [roleFilter, setRoleFilter] = useState<HeroRole>();
	const [partyBuffFilter, setPartyBuffFilter] = useState<HeroPartyBuff>();

	const selectedHeroes = useMemo(() => heroes.filter((hero) => findHero(hero)), [heroes, findHero]);

	const filteredHeroes = useMemo(
		() =>
			heroes.filter((hero) => {
				if (elementFilter && hero.element.sys.id !== elementFilter.sys.id) {
					return false;
				}
				if (roleFilter && hero.role.sys.id !== roleFilter.sys.id) {
					return false;
				}
				if (
					partyBuffFilter &&
					hero.partyBuff.sys.id !== partyBuffFilter.sys.id &&
					hero.partyBuff2?.sys.id !== partyBuffFilter.sys.id
				) {
					return false;
				}
				return true;
			}),
		[heroes, elementFilter, roleFilter, partyBuffFilter]
	);

	const partyBuffOptions = useMemo(
		() =>
			heroPartyBuffs.map((b) => ({
				value: b,
				label: b.name,
			})),
		[heroPartyBuffs]
	);

	return (
		<div className={styles.heroPicker}>
			<div className={styles.heroPickerFilters}>
				<ElementFilter selected={elementFilter} onSelect={setElementFilter} />
				<RoleFilter selected={roleFilter} onSelect={setRoleFilter} />
				<CloseButton onClick={onClose} title="Close" />
			</div>
			<div className={styles.heroPickerFilters}>
				<div style={{ width: 360 }}>
					<Select
						options={partyBuffOptions}
						onChange={(o) => setPartyBuffFilter(o?.value ?? undefined)}
						isClearable
						placeholder="Filter Party Buff ..."
					/>
				</div>
			</div>
			<div className={styles.heroPickerHeroes}>
				{heroes.map((hero) => (
					<div key={hero.sys.id} className={styles.badgeWrapper}>
						<HeroBadge
							hero={hero}
							faded={
								(selectedHeroes.includes(hero) && hero !== currentHero) ||
								!filteredHeroes.includes(hero)
							}
							onClick={() => onSelect(hero)}
							size={120}
						/>
					</div>
				))}
			</div>
			<ReactTooltip effect="solid" place="bottom" multiline delayShow={200} />
		</div>
	);
}

export default HeroPicker;
