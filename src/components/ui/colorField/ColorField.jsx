import React from 'react';
import PropTypes from 'prop-types';

const ColorField = ({ classes }) => (
  <div
    className={classes.colorField}
  />
);

ColorField.propTypes = {
  classes: PropTypes.shape().isRequired,
};

export default ColorField;
