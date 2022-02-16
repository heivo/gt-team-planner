import { useMemo, useState } from 'react';
import CloseButton from './CloseButton';
import ElementFilter from './ElementFilter';
import WeaponBadge from '../badges/WeaponBadge';
import ReactTooltip from 'react-tooltip';
import { Weapon, Element, Data } from '~/types';
import { useOutletContext } from 'remix';

interface Props {
  weaponCategoryIds: string[];
  showAilment: boolean;
  onSelect: (weapoin: Weapon) => void;
  onClose: () => void;
}

const compareWeapons = (w1: Weapon, w2: Weapon): number => {
  let i = w1.rarity.localeCompare(w2.rarity);
  if (i === 0) {
    i = (w2.image ? 1 : 0) - (w1.image ? 1 : 0);
  }
  if (i === 0) {
    i = w1.name.localeCompare(w2.name);
  }
  return i;
};

function WeaponPicker({ weaponCategoryIds, showAilment, onSelect, onClose }: Props) {
  const { weapons } = useOutletContext<Data>();

  const [elementFilter, setElementFilter] = useState<Element>();

  const availableWeapons = useMemo(
    () =>
      weapons
        .filter((weapon) => {
          if (!weaponCategoryIds.some((catId) => catId === weapon.category.sys.id)) {
            return false;
          }
          return true;
        })
        .sort(compareWeapons),
    [weapons, weaponCategoryIds]
  );

  const filteredWeapons = useMemo(
    () =>
      availableWeapons.filter((weapon) => {
        if (elementFilter && weapon.element.sys.id !== elementFilter.sys.id) {
          return false;
        }
        return true;
      }),
    [availableWeapons, elementFilter]
  );

  return (
    <div className="weaponPicker">
      <div className="weaponPickerFilters">
        <ElementFilter selected={elementFilter} onSelect={setElementFilter} />
        <CloseButton onClick={onClose} title="Close" />
      </div>
      <div className="weaponPickerWeapons">
        {availableWeapons.map((weapon) => (
          <div key={weapon.sys.id} className="badgeWrapper">
            <WeaponBadge
              weapon={weapon}
              faded={!filteredWeapons.includes(weapon)}
              showAilment={showAilment}
              size={100}
              onClick={() => onSelect(weapon)}
            />
          </div>
        ))}
      </div>
      <ReactTooltip effect="solid" place="bottom" multiline delayShow={200} />
    </div>
  );
}

export default WeaponPicker;
