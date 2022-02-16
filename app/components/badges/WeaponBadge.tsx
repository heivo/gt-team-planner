import { useMemo } from 'react';
import cn from 'classnames';
import { Ailment, Data, Element, Weapon, WeaponCategory } from '~/types';
import { useOutletContext } from 'remix';

interface Props {
  weapon: Weapon;
  onClick?: () => void;
  faded?: boolean;
  showAilment?: boolean;
  size?: number;
}

const WeaponBadge = ({ weapon, onClick, faded = false, showAilment = false, size = 150 }: Props) => {
  const { ailments, elements, weaponCategories } = useOutletContext<Data>();

  const ailment = ailments.find((a) => a.sys.id === weapon.ailment.sys.id) as Ailment;
  const element = elements.find((e) => e.sys.id === weapon.element.sys.id) as Element;
  const category = weaponCategories.find((c) => c.sys.id === weapon.category.sys.id) as WeaponCategory;

  const borderColor = useMemo<string>(() => {
    switch (weapon.rarity) {
      case 'unique':
        return '#ad5833';
      case 'legend':
        return '#c39f3e';
      case 'epic':
        return '#4b812d';
      default:
        return '#fff';
    }
  }, [weapon.rarity]);

  const shadowColor = useMemo<string>(() => {
    switch (weapon.rarity) {
      case 'unique':
        return '#e69465';
      case 'legend':
        return '#ffdd5f';
      case 'epic':
        return '#95f053';
      default:
        return '#fff';
    }
  }, [weapon.rarity]);

  const tooltip = `
		${weapon.name}<br /><br /><br />
		Category: ${weapon.category.name}<br />
		Element: ${weapon.element.name}<br />
		Skill Ailment: ${weapon.ailment.name}
	`;

  return (
    <div
      className={cn('weaponBadge', { faded })}
      onClick={onClick}
      style={{
        backgroundImage: weapon.image?.url ? `url(${weapon.image.url})` : `url(${category.image.url})`,
        backgroundSize: weapon.image?.url ? 'contain' : 'auto',
        width: size,
        height: size,
        cursor: onClick ? 'pointer' : 'default',
        boxShadow: `inset 0 0 10px ${shadowColor}`,
        borderColor,
      }}
      data-tip={tooltip}
    >
      <div className="weaponBadgeElementContainer" style={{ width: Math.max(size / 4, 25) }}>
        <img src={element.image.url} alt={element.name} />
      </div>
      {showAilment && (
        <div className="weaponBadgeAilment">
          <img src={ailment.image?.url ?? ''} alt={ailment.name ?? ''} />
        </div>
      )}
    </div>
  );
};

export default WeaponBadge;
