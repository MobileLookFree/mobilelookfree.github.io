import React from 'react';

const Title = ({ classes, darktheme }) => {
  return (
    <h1 className={classes.title}>{darktheme ? 'Dark theme 🌚' : 'Light theme 🌝'}</h1>
  );
};

export default Title;