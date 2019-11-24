import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ classes, selectTheme }) => (
  <button className={classes.button} onClick={selectTheme} type="button">
    Switch
  </button>
);

Button.propTypes = {
  classes: PropTypes.shape().isRequired,
  selectTheme: PropTypes.func.isRequired,
};

export default Button;
