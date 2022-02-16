import cn from 'classnames';
import { Data, HeroRole } from '~/types';
import { useOutletContext } from 'remix';

interface Props {
  selected?: HeroRole;
  onSelect: (role?: HeroRole) => void;
}

const RoleFilter = ({ selected, onSelect }: Props) => {
  const { heroRoles } = useOutletContext<Data>();

  const handleClick = (role: HeroRole) => {
    if (role === selected) {
      onSelect(undefined);
    } else {
      onSelect(role);
    }
  };

  return (
    <div className="roleFilter">
      {heroRoles.map((role) => (
        <img
          key={role.sys.id}
          src={role.image.url}
          className={cn({ selected: selected === role })}
          data-tip={role.name}
          alt={role.name}
          onClick={() => handleClick(role)}
        />
      ))}
    </div>
  );
};

export default RoleFilter;
