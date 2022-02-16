import cn from 'classnames';
import { Data, Element } from '~/types';
import { useOutletContext } from 'remix';

interface Props {
  selected?: Element;
  onSelect: (element?: Element) => void;
}

const ElementFilter = ({ selected, onSelect }: Props) => {
  const { elements } = useOutletContext<Data>();

  const handleClick = (element: Element) => {
    if (element === selected) {
      onSelect(undefined);
    } else {
      onSelect(element);
    }
  };

  return (
    <div className="elementFilter">
      {elements.map((element) => (
        <div
          key={element.sys.id}
          className="elementFilterImageWrapper"
          /* style={{ backgroundColor: element.color }} */
        >
          <img
            src={element.image.url}
            className={cn({ selected: selected === element })}
            data-tip={element.name}
            alt={element.name}
            onClick={() => handleClick(element)}
          />
        </div>
      ))}
    </div>
  );
};

export default ElementFilter;
