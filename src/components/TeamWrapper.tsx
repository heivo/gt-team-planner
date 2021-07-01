import React, { useContext, useCallback, MouseEvent, ReactElement } from 'react';
import styles from '../style.module.scss';
import StateContext from '../context/StateContext';

interface Props {
	teamNumber: number;
	show: boolean;
	children: ReactElement;
}

const TeamWrapper = ({ teamNumber, show, children }: Props) => {
	const { removeTeam, activeTeam, setActiveTeam } = useContext(StateContext);

	const collapse = useCallback(
		(event: MouseEvent) => {
			event.stopPropagation();
			setActiveTeam(null);
		},
		[setActiveTeam]
	);

	const remove = useCallback(
		(event: MouseEvent) => {
			event.stopPropagation();
			removeTeam(teamNumber);
		},
		[teamNumber, removeTeam]
	);

	if (show) {
		return (
			<div className={styles.teamWrapper} onClick={() => setActiveTeam(teamNumber)}>
				<h1>
					Team #{teamNumber + 1}
					{activeTeam === teamNumber && (
						<button onClick={collapse} className={styles.button}>
							collapse
						</button>
					)}
					<button onClick={remove} className={styles.button}>
						remove team
					</button>
				</h1>

				{children}
			</div>
		);
	} else {
		return children;
	}
};

export default TeamWrapper;
