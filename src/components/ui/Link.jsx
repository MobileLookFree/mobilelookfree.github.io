import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledLink = styled.a`
  text-decoration: none;
  color: ${(props) => props.color};
`;

const Link = ({ children, color, href }) => (
  <StyledLink href={href} color={color}>{children}</StyledLink>
);

Link.propTypes = {
  color: PropTypes.string,
  href: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

Link.defaultProps = {
  color: 'blue',
};

export default Link;
