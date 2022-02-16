import { useState, useContext } from 'react';
import { Weapon } from '~/types';
import StateContext from '../../StateContext';

const useWeaponPicker = () => {
  const { teams, selectWeapon } = useContext(StateContext);

  const [isOpen, setOpen] = useState<boolean>(false);
  const [weaponCategoryIds, setWeaponCategoryIds] = useState<string[] | null>(null);
  const [teamNumber, setTeamNumber] = useState<number>();
  const [slotNumber, setSlotNumber] = useState<number>();

  const openPicker = (teamNumber: number, slotNumber: number) => {
    setOpen(true);
    setTeamNumber(teamNumber);
    setSlotNumber(slotNumber);
    setWeaponCategoryIds(
      teams[teamNumber].slots[slotNumber].hero?.weaponCategoriesCollection.items.map((i) => i.sys.id) ?? []
    );
  };

  const closePicker = () => {
    setOpen(false);
    setTeamNumber(undefined);
    setSlotNumber(undefined);
    setWeaponCategoryIds(null);
  };

  const handleSelectWeapon = (weapon: Weapon) => {
    if (teamNumber != null && slotNumber != null) {
      selectWeapon(teamNumber, slotNumber, weapon);
    }
    closePicker();
  };

  return {
    isWeaponPickerOpen: isOpen,
    isLeaderSlot: slotNumber === 0,
    weaponCategoryIds,
    openWeaponPicker: openPicker,
    closeWeaponPicker: closePicker,
    handleSelectWeapon,
  };
};

export default useWeaponPicker;
