import React from 'react';
import PropTypes from 'prop-types';

const Title = ({ classes, darkTheme }) => (
  <h1 className={classes.title}>{darkTheme ? 'Dark theme 🌚' : 'Light theme 🌝'}</h1>
);

Title.propTypes = {
  classes: PropTypes.shape().isRequired,
  darkTheme: PropTypes.bool.isRequired,
};

export default Title;
