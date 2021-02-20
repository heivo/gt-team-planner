import React from 'react';
import styles from '../style.module.scss';

interface Props {
	onClick: () => void;
	title?: string;
}

const CloseButton = ({ onClick, title }: Props) => (
	<div className={styles.closeButton} onClick={() => onClick()} title={title}></div>
);

export default CloseButton;
