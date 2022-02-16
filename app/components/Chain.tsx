import React, { forwardRef, ForwardedRef } from 'react';
import HeroBadge from './badges/HeroBadge';
import cn from 'classnames';
import starIcon from '../assets/star.png';
import { Hero } from '~/types';

interface Props {
  heroes: Hero[];
  selected: boolean;
  onClick: () => void;
}

const Chain = forwardRef(({ heroes, selected, onClick }: Props, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <div ref={ref} className={cn('chain', { selectedChain: selected })} onClick={onClick}>
      {heroes.map((hero, i) => (
        <React.Fragment key={hero.sys.id}>
          {i > 0 && <span className="chainArrow">➞</span>}
          <HeroBadge hero={hero} size={100} />
        </React.Fragment>
      ))}
      <img src={starIcon} className="chainStar" />
    </div>
  );
});

Chain.displayName = 'Chain';

export default Chain;
