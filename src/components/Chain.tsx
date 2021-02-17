import React from 'react';
import { Ailment } from '../graphql/schema';
import styles from '../style.module.scss';
import chainIcon from '../assets/chain.png';

interface Props {
	ailmentStart: Ailment;
	ailmentEnd: Ailment;
}

const Chain = ({ ailmentStart, ailmentEnd }: Props) => {
	return (
		<div className={styles.chain}>
			<img src={ailmentStart.image?.url ?? ''} alt={ailmentStart.name ?? ''} title={ailmentStart.name ?? ''} />
			<img src={ailmentEnd.image?.url ?? ''} alt={ailmentEnd.name ?? ''} title={ailmentEnd.name ?? ''} />
			<img src={chainIcon} alt="chain" />
		</div>
	);
};

export default Chain;
