import { useState, useContext } from 'react';
import StateContext from '../../context/StateContext';
import { Hero } from '../../context/DataContext';

const useHeroPicker = () => {
	const { teams, selectHero } = useContext(StateContext);

	const [isOpen, setOpen] = useState<boolean>(false);
	const [currentHero, setCurrentHero] = useState<Hero | null>(null);
	const [teamNumber, setTeamNumber] = useState<number>();
	const [slotNumber, setSlotNumber] = useState<number>();

	const openPicker = (teamNumber: number, slotNumber: number) => {
		setOpen(true);
		setTeamNumber(teamNumber);
		setSlotNumber(slotNumber);
		setCurrentHero(teams[teamNumber].slots[slotNumber].hero);
	};

	const closePicker = () => {
		setOpen(false);
		setTeamNumber(undefined);
		setSlotNumber(undefined);
		setCurrentHero(null);
	};

	const handleSelectHero = (hero: Hero) => {
		if (teamNumber != null && slotNumber != null) {
			selectHero(teamNumber, slotNumber, hero);
		}
		closePicker();
	};

	return {
		isHeroPickerOpen: isOpen,
		currentHero,
		openHeroPicker: openPicker,
		closeHeroPicker: closePicker,
		handleSelectHero,
	};
};

export default useHeroPicker;
