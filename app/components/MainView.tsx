import { useContext, useEffect, useState } from 'react';
import StateContext from '../StateContext';
import Team from './Team';
import useHeroPicker from './pickers/useHeroPicker';
import HeroPicker from './pickers/HeroPicker';
import WeaponPicker from './pickers/WeaponPicker';
import useWeaponPicker from './pickers/useWeaponPicker';
import Footer from './Footer';
import TeamWrapper from './TeamWrapper';
import ReactTooltip from 'react-tooltip';
import addTeamIcon from '../assets/add_team.png';
import trashIcon from '../assets/trash_large.png';

function MainView() {
  const { teams, addTeam, reset, activeTeam } = useContext(StateContext);

  // delay rendering of tooltip so it's not rendered on the server
  const [tooltipVisible, setTooltipVisible] = useState(false);

  useEffect(() => {
    setTooltipVisible(true);
  }, []);

  const handleAddTeamButtonClick = () => {
    addTeam();
    ReactTooltip.hide();
  };

  const handleResetButtonClick = () => {
    reset();
    ReactTooltip.hide();
  };

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
    <div>
      <header className="header">
        <h1>Guardian Tales - Team Planner</h1>
        <button onClick={handleAddTeamButtonClick} data-tip="Add Team">
          <img src={addTeamIcon} />
        </button>
        <button onClick={handleResetButtonClick} data-tip="Clear all">
          <img src={trashIcon} />
        </button>
      </header>
      <div className="contentWrapper">
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
    </div>
  );
}

export default MainView;
