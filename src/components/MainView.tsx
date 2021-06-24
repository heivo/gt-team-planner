import React, { useContext, useState, useEffect, useMemo } from 'react';
import StateContext from '../context/StateContext';
import styles from '../style.module.scss';
import ReactTooltip from 'react-tooltip';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import TeamContainer from './TeamContainer';
import useHeroPicker from './pickers/useHeroPicker';
import HeroPicker from './pickers/HeroPicker';
import WeaponPicker from './pickers/WeaponPicker';
import useWeaponPicker from './pickers/useWeaponPicker';

function MainView() {
	const { teams, addTeam, reset } = useContext(StateContext);
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

	const { isHeroPickerOpen, currentHero, openHeroPicker, closeHeroPicker, handleSelectHero } = useHeroPicker();

	const {
		isWeaponPickerOpen,
		weaponCategoryIds,
		isLeaderSlot,
		openWeaponPicker,
		closeWeaponPicker,
		handleSelectWeapon,
	} = useWeaponPicker();

	if (isHeroPickerOpen) {
		return <HeroPicker currentHero={currentHero} onSelect={handleSelectHero} onClose={closeHeroPicker} />;
	}

	if (isWeaponPickerOpen && weaponCategoryIds) {
		return (
			<WeaponPicker
				weaponCategoryIds={weaponCategoryIds}
				showAilment={isLeaderSlot}
				onSelect={handleSelectWeapon}
				onClose={closeWeaponPicker}
			/>
		);
	}
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
						openHeroPicker={(slotNumber: number) => openHeroPicker(teamNumber, slotNumber)}
						openWeaponPicker={(slotNumber: number) => openWeaponPicker(teamNumber, slotNumber)}
					/>
				))}
			</div>
			<footer className={styles.footer}>
				<span>
					Found a bug or have a suggestion for improvements? File an issue on&nbsp;
					<a href="https://github.com/heivo/gt-team-planner/issues" target="_blank" rel="noreferrer">
						GitHub
					</a>
					.
				</span>
				<span>
					Like this tool? Please consider to{' '}
					<a href="https://www.buymeacoffee.com/heivo" target="_blank" rel="noreferrer">
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
