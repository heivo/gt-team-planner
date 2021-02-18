import React from 'react';
import styles from '../style.module.scss';
import chainIcon from '../assets/chain.png';
import { Ailment } from '../context/DataContext';

interface Props {
	ailmentStart: Ailment;
	ailmentEnd: Ailment;
}

const ChainIcon = ({ ailmentStart, ailmentEnd }: Props) => {
	return (
		<div className={styles.chainIcon}>
			<img src={ailmentStart.image.url} alt={ailmentStart.name} title={ailmentStart.name} />
			<img src={ailmentEnd.image.url} alt={ailmentEnd.name} title={ailmentEnd.name} />
			<img src={chainIcon} alt="chain" />
		</div>
	);
};

export default ChainIcon;
