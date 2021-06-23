import React, { useContext, useState, useEffect, useMemo } from 'react';
import StateContext from '../context/StateContext';
import styles from '../style.module.scss';
import ReactTooltip from 'react-tooltip';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import TeamContainer from './TeamContainer';
import { Hero, Weapon } from '../context/DataContext';

function MainView() {
	const { teams, selectHero, selectWeapon, addTeam, reset } = useContext(StateContext);
	const { encodedState } = useParams<{ encodedState: string | undefined }>();

	// delay rendering of tooltip so it's not rendered on the server
	const [tooltipVisible, setTooltipVisible] = useState(false);

	useEffect(() => {
		setTooltipVisible(true);
	}, []);

	const ogDescription = useMemo<string>(() => {
		if (teams[0].slots.filter((slot) => slot.hero).length === 4) {
			return teams[0].slots
				.map((slot) => {
					let name = slot.hero?.name;
					if (slot.hero?.defaultWeapon.sys.id !== slot.weapon?.sys.id) {
						name += ` (${slot.weapon?.name})`;
					}
					return name;
				})
				.join(', ');
		} else {
			return 'Online team planning tool for Guardian Tales: select your heroes and weapons, see party buffs and possible chain skill combinations, share your setup via URL.';
		}
	}, [teams[0].slots]);

	const ogImage = useMemo<string | undefined>(() => {
		if (encodedState && teams[0].slots.filter((slot) => slot.hero).length === 4) {
			return `/img/${encodedState}`;
		}
	}, [teams[0].slots, encodedState]);

	return (
		<>
			<button onClick={reset} className={styles.button}>
				reset
			</button>
			<button onClick={addTeam} className={styles.button}>
				add team
			</button>
			<div className={styles.contentWrapper}>
				{teams.map((team, teamNumber) => (
					<TeamContainer
						key={teamNumber}
						team={team}
						selectHero={(slotNumber: number, hero: Hero) => selectHero(teamNumber, slotNumber, hero)}
						selectWeapon={(slotNumber: number, weapon: Weapon) =>
							selectWeapon(teamNumber, slotNumber, weapon)
						}
					/>
				))}
			</div>
			<footer className={styles.footer}>
				<span>
					Found a bug or have a suggestion for improvements? File an issue on&nbsp;
					<a href="https://github.com/heivo/gt-team-planner/issues" target="_blank">
						GitHub
					</a>
					.
				</span>
				<span>
					Like this tool? Please consider to{' '}
					<a href="https://www.buymeacoffee.com/heivo" target="_blank">
						{' '}
						buy me a coffee
					</a>{' '}
					;)
				</span>
			</footer>
			{tooltipVisible && <ReactTooltip effect="solid" place="bottom" multiline delayShow={200} />}
			<Helmet>
				{/* this makes the image larger on discord */}
				<meta name="twitter:card" content="summary_large_image" />
				<meta property="og:title" content="Guardian Tales - Team Planner" />
				<meta property="og:description" content={ogDescription} />
				{ogImage && <meta property="og:image" content={ogImage} />}
			</Helmet>
		</>
	);
}

export default MainView;
