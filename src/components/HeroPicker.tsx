import React, { useContext, useMemo, useState } from 'react';
import DataContext, { Element, Hero, HeroPartyBuff, HeroRole } from '../context/DataContext';
import styles from '../style.module.scss';
import CloseButton from './CloseButton';
import ElementPicker from './ElementPicker';
import HeroBadge from './HeroBadge';
import RolePicker from './RolePicker';
import ReactTooltip from 'react-tooltip';
import Select from 'react-select';

interface Props {
	otherUsedHeroes: Hero[];
	onSelect: (hero: Hero) => void;
	onClose: () => void;
}

function HeroPicker({ otherUsedHeroes, onSelect, onClose }: Props) {
	const { heroes, heroPartyBuffs } = useContext(DataContext);

	const [elementFilter, setElementFilter] = useState<Element>();
	const [roleFilter, setRoleFilter] = useState<HeroRole>();
	const [partyBuffFilter, setPartyBuffFilter] = useState<HeroPartyBuff>();

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
				<ElementPicker selected={elementFilter} onSelect={setElementFilter} />
				<RolePicker selected={roleFilter} onSelect={setRoleFilter} />

				<CloseButton onClick={onClose} title="Close" />
			</div>
			<div className={styles.heroPickerFilters}>
				<div style={{ width: 360 }}>
					<Select
						options={partyBuffOptions}
						onChange={(o) => setPartyBuffFilter(o?.value ?? undefined)}
						isClearable
						placeholder="Filter Group Buff..."
					/>
				</div>
			</div>
			<div className={styles.heroPickerHeroes}>
				{heroes.map((hero) => (
					<div key={hero.sys.id} className={styles.badgeWrapper}>
						<HeroBadge
							hero={hero}
							faded={otherUsedHeroes.includes(hero) || !filteredHeroes.includes(hero)}
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
