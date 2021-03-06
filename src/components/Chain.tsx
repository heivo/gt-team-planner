import React, { forwardRef, ForwardedRef } from 'react';
import { Hero } from '../context/DataContext';
import styles from '../style.module.scss';
import HeroBadge from './badges/HeroBadge';
import cn from 'classnames';
import starIcon from '../assets/star.png';

interface Props {
	heroes: Hero[];
	selected: boolean;
	onClick: () => void;
}

const Chain = forwardRef(({ heroes, selected, onClick }: Props, ref: ForwardedRef<HTMLDivElement>) => {
	return (
		<div ref={ref} className={cn(styles.chain, { [styles.selectedChain]: selected })} onClick={onClick}>
			{heroes.map((hero, i) => (
				<React.Fragment key={hero.sys.id}>
					{i > 0 && <span className={styles.chainArrow}>➞</span>}
					<HeroBadge hero={hero} size={100} />
				</React.Fragment>
			))}
			<img src={starIcon} className={styles.chainStar} />
		</div>
	);
});

Chain.displayName = 'Chain';

export default Chain;
