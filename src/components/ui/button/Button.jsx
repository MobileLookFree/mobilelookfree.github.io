import React from 'react';

const Button = ({ classes, selectTheme }) => {
  return (
    <button className={classes.button} onClick={selectTheme}>
      Switch
    </button>
  );
};

export default Button;
