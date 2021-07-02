import React, { useContext } from 'react';
import DataContext, { HeroRole } from '../../context/DataContext';
import styles from '../../style.module.scss';
import cn from 'classnames';

interface Props {
	selected?: HeroRole;
	onSelect: (role?: HeroRole) => void;
}

const RoleFilter = ({ selected, onSelect }: Props) => {
	const { heroRoles } = useContext(DataContext);

	const handleClick = (role: HeroRole) => {
		if (role === selected) {
			onSelect(undefined);
		} else {
			onSelect(role);
		}
	};

	return (
		<div className={styles.roleFilter}>
			{heroRoles.map((role) => (
				<img
					key={role.sys.id}
					src={role.image.url}
					className={cn({ [styles.selected]: selected === role })}
					data-tip={role.name}
					alt={role.name}
					onClick={() => handleClick(role)}
				/>
			))}
		</div>
	);
};

export default RoleFilter;
