import React, { FC, useState, useEffect } from 'react';
import { Styled } from './style';
import { Colors } from '../../../assets/colors';

interface ButtonRoundProps {
  pressed?: boolean;
  onClick?: (event: React.MouseEvent) => void;
};

const ButtonRound: FC<ButtonRoundProps> = ({ children, onClick }) => {
  const [pressed, setPressed] = useState<boolean>(false);

  const onClickHandler = (event: React.MouseEvent): void => {
    setPressed(true);
    onClick && onClick(event);
  };

  useEffect(() => {
    pressed && setTimeout(() => setPressed(false), 300);
  }, [pressed]);

  return (
    <Styled
      className='app-ui-round-button'
      color='white'
      bColor={Colors.purple}
      pressedBColor={Colors.purpleDark}
      pressed={pressed}
      onClick={onClickHandler}
    >
      {children}
    </Styled>
  );
};

export default ButtonRound;