import React, { useContext } from 'react';
import DataContext, { Element } from '../context/DataContext';
import styles from '../style.module.scss';
import cn from 'classnames';

interface Props {
	selected?: Element;
	onSelect: (element?: Element) => void;
}

const ElementPicker = ({ selected, onSelect }: Props) => {
	const { elements } = useContext(DataContext);

	const handleClick = (element: Element) => {
		if (element === selected) {
			onSelect(undefined);
		} else {
			onSelect(element);
		}
	};

	return (
		<div className={styles.elementPicker}>
			{elements.map((element) => (
				<div
					key={element.sys.id}
					className={styles.elementPickerImageWrapper}
					/* style={{ backgroundColor: element.color }} */
				>
					<img
						src={element.image.url}
						className={cn({ [styles.selected]: selected === element })}
						data-tip={element.name}
						alt={element.name}
						onClick={() => handleClick(element)}
					/>
				</div>
			))}
		</div>
	);
};

export default ElementPicker;
