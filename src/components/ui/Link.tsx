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

interface LinkProps {
  children: React.ReactNode;
  color?: string;
  href: string;
}

const Link: React.FC<LinkProps> = React.memo((
  { children, color, href }) => (
    <StyledLink
      href={href}
      color={color}
    >
      {children}
    </StyledLink>
  ));

Link.defaultProps = {
  color: 'blue',
};

export default Link;
