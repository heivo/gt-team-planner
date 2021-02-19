import React from 'react';
import styles from '../style.module.scss';
import chainIcon from '../assets/chain.png';
import { Ailment } from '../context/DataContext';

interface Props {
	ailmentStart: Ailment;
	ailmentEnd: Ailment;
	size?: number;
}

const ChainIcon = ({ ailmentStart, ailmentEnd, size = 50 }: Props) => {
	return (
		<div className={styles.chainIcon} style={{ width: size, height: size * 0.9 }}>
			<img
				src={ailmentStart.image.url}
				alt={ailmentStart.name}
				title={ailmentStart.name}
				style={{ width: size / 1.8 }}
			/>
			<img
				src={ailmentEnd.image.url}
				alt={ailmentEnd.name}
				title={ailmentEnd.name}
				style={{ width: size / 1.8 }}
			/>
			<img src={chainIcon} alt="chain" style={{ width: size / 3, height: size / 3 }} />
		</div>
	);
};

export default ChainIcon;
