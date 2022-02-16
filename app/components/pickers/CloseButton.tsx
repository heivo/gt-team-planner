interface Props {
  onClick: () => void;
  title?: string;
}

const CloseButton = ({ onClick, title }: Props) => (
  <div className="closeButton" onClick={() => onClick()} data-tip={title}></div>
);

export default CloseButton;
