import { FC } from 'react';

import './default-button.styles.css';

interface DefaultButtonProps {
  bgColor: string;
  handleClick: () => void;
  disabled?: boolean;
}

const DefaultButton: FC<DefaultButtonProps> = ({
  bgColor,
  handleClick,
  disabled,
  children,
}) => {
  return (
    <button
      className='default-button__btn'
      style={{ backgroundColor: bgColor }}
      onClick={handleClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default DefaultButton;
