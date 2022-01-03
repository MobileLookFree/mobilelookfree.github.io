import React from 'react';
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

export default Link;