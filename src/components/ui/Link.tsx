import React, { PureComponent } from 'react';
import styled from 'styled-components';

// styles
const StyledLink = styled.a`
  text-decoration: none;
  color: ${({ color }) => color};
  font-weight: bold;
  &:hover {
    color: red
  }
`;

export enum Colors {
  red = 'red',
  blue = 'blue'
};

interface LinkProps<T> {
  children?: React.ReactNode;
  color?: Colors;
  width?: T;
  height?: T;
  href: string;
}

function Link<T>(props: LinkProps<T>) {
  const { children, ...others} = props;
  return (
    <StyledLink {...others}>
      {children}
    </StyledLink>
  );
};

Link.defaultProps = {
  color: 'blue',
};

interface IClass {
  child: React.ReactChild;
}

export class Test extends PureComponent<IClass>{
  getNumber = (num: number): 1 | 0 => {
    return num > 2 ? 1 : 0;
  }

  render(): React.ReactNode {
    const { child } = this.props;
      return child;
  }
};

export default Link;