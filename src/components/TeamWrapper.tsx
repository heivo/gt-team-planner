import React, { useContext, useCallback, MouseEvent, ReactElement, useRef, useEffect } from 'react';
import styles from '../style.module.scss';
import StateContext from '../context/StateContext';
import trashIcon from '../assets/trash.png';
import collapseIcon from '../assets/collapse.png';
import unfoldIcon from '../assets/unfold.png';
import ReactTooltip from 'react-tooltip';

interface Props {
	teamNumber: number;
	show: boolean;
	children: ReactElement;
}

const TeamWrapper = ({ teamNumber, show, children }: Props) => {
	const { removeTeam, activeTeam, setActiveTeam } = useContext(StateContext);

	const toggle = useCallback(
		(event: MouseEvent) => {
			event.stopPropagation();
			if (activeTeam === null) {
				setActiveTeam(teamNumber);
			} else {
				setActiveTeam(null);
			}
			ReactTooltip.hide();
		},
		[activeTeam, setActiveTeam, teamNumber]
	);

	const remove = useCallback(
		(event: MouseEvent) => {
			event.stopPropagation();
			removeTeam(teamNumber);
			ReactTooltip.hide();
		},
		[teamNumber, removeTeam]
	);

	const element = useRef<HTMLDivElement>();

	useEffect(() => {
		if (activeTeam === teamNumber) {
			element.current?.scrollIntoView({
				behavior: 'smooth',
				block: 'start',
			});
		}
		// only scroll when a new team is added
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (show) {
		return (
			<div className={styles.teamWrapper} onClick={() => setActiveTeam(teamNumber)} ref={element}>
				<div className={styles.teamWrapperHeader}>
					<h2>Team {teamNumber + 1}</h2>
					<button onClick={toggle} className={styles.teamWrapperButton} data-tip="Toggle Team">
						{teamNumber === activeTeam ? <img src={collapseIcon} /> : <img src={unfoldIcon} />}
					</button>
					<button onClick={remove} className={styles.teamWrapperButton} data-tip="Remove Team">
						<img src={trashIcon} />
					</button>
				</div>
				{children}
			</div>
		);
	} else {
		return children;
	}
};

export default TeamWrapper;
