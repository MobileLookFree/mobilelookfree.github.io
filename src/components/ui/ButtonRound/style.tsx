import styled from 'styled-components';

interface IProps {
  pressed?: boolean;
  color?: string;
  bColor?: string;
  pressedBColor?: string;
}

// styles
export const Styled = styled.button<IProps>`
  width: 50px;
  height: 50px;
  margin: 0px 5px;
  border-radius: ${({ pressed }) => pressed ? '6px' : '50%'};
  color: ${({ color }) => color};
  background-color: ${({ pressed, bColor, pressedBColor }) => pressed
    ? pressedBColor
    : bColor
  };
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    opacity: 0.9;
  }
`;