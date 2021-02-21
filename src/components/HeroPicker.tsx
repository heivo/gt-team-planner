import React, { useContext, useMemo, useState } from 'react';
import DataContext, { Element, Hero, HeroRole } from '../context/DataContext';
import styles from '../style.module.scss';
import CloseButton from './CloseButton';
import ElementPicker from './ElementPicker';
import HeroBadge from './HeroBadge';
import RolePicker from './RolePicker';

interface Props {
	otherUsedHeros: Hero[];
	onSelect: (hero: Hero) => void;
	onClose: () => void;
}

function HeroPicker({ otherUsedHeros, onSelect, onClose }: Props) {
	const { heroes } = useContext(DataContext);

	const [elementFilter, setElementFilter] = useState<Element>();
	const [roleFilter, setRoleFilter] = useState<HeroRole>();

	const filteredHeroes = useMemo(
		() =>
			heroes.filter((hero) => {
				if (elementFilter && hero.element.sys.id !== elementFilter.sys.id) {
					return false;
				}
				if (roleFilter && hero.role.sys.id !== roleFilter.sys.id) {
					return false;
				}
				return true;
			}),
		[heroes, elementFilter, roleFilter]
	);

	return (
		<div className={styles.heroPicker}>
			<div className={styles.heroPickerFilters}>
				<ElementPicker selected={elementFilter} onSelect={setElementFilter} />
				<RolePicker selected={roleFilter} onSelect={setRoleFilter} />
				<CloseButton onClick={onClose} title="Close" />
			</div>
			<div className={styles.heroPickerHeroes}>
				{filteredHeroes.map((hero) => (
					<div key={hero.sys.id} className={styles.badgeWrapper}>
						<HeroBadge
							hero={hero}
							faded={otherUsedHeros.includes(hero)}
							onClick={() => onSelect(hero)}
							size={120}
						/>
					</div>
				))}
			</div>
		</div>
	);
}

export default HeroPicker;
