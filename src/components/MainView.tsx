import React, { useContext, useEffect, useState } from 'react';
import StateContext from '../context/StateContext';
import styles from '../style.module.scss';
import Team from './Team';
import useHeroPicker from './pickers/useHeroPicker';
import HeroPicker from './pickers/HeroPicker';
import WeaponPicker from './pickers/WeaponPicker';
import useWeaponPicker from './pickers/useWeaponPicker';
import Footer from './Footer';
import TeamWrapper from './TeamWrapper';
import ReactTooltip from 'react-tooltip';

function MainView() {
	const { teams, addTeam, reset, activeTeam } = useContext(StateContext);

	// delay rendering of tooltip so it's not rendered on the server
	const [tooltipVisible, setTooltipVisible] = useState(false);

	useEffect(() => {
		setTooltipVisible(true);
	}, []);

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
			<p>
				<button onClick={reset} className={styles.button}>
					reset
				</button>
				<button onClick={addTeam} className={styles.button}>
					add team
				</button>
			</p>
			<div className={styles.contentWrapper}>
				{teams.map((team, teamNumber) => (
					<TeamWrapper key={teamNumber} teamNumber={teamNumber} show={teams.length > 1}>
						<Team
							teamNumber={teamNumber}
							settings={team}
							openHeroPicker={(slotNumber: number) => openHeroPicker(teamNumber, slotNumber)}
							openWeaponPicker={(slotNumber: number) => openWeaponPicker(teamNumber, slotNumber)}
							isCollapsed={teamNumber !== activeTeam}
						/>
					</TeamWrapper>
				))}
			</div>
			<Footer />
			{tooltipVisible && <ReactTooltip effect="solid" place="bottom" multiline delayShow={200} />}
		</>
	);
}

export default MainView;
