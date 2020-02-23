import React from 'react';
import PropTypes from 'prop-types';
import Button from '../ui/button';
import Title from '../ui/title';
import ColorField from '../ui/colorField';
import Link from '../ui/Link';

class App extends React.PureComponent {
  state = {
    darkTheme: false,
    coordinateX: 0,
  };

  componentDidMount() {
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    if (darkModeMediaQuery.matches) {
      this.setState((prevState) => ({ ...prevState, darkTheme: true }));
    }
    darkModeMediaQuery.addListener((event) => {
      event.matches
        ? this.setState((prevState) => ({ ...prevState, darkTheme: true }))
        : this.setState((prevState) => ({ ...prevState, darkTheme: false }));
    });
  }

  selectTheme = () => {
    const { darkTheme } = this.state;
    this.setState((prevState) => ({ ...prevState, darkTheme: !darkTheme }));
  };

  moveGradient = (event) => {
    this.setState({ coordinateX: event.pageX });
  };

  render() {
    const { classes } = this.props;
    const { darkTheme, coordinateX } = this.state;
    return (
      <div
        className={classes.wrapper}
        onMouseMove={this.moveGradient}
      >
        <ColorField
          darkTheme={darkTheme}
          coordinateX={coordinateX}
        />
        <Title darkTheme={darkTheme} />
        <Button darkTheme={darkTheme} selectTheme={this.selectTheme} />
        <Link href="https://yandex.ru">Клик</Link>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.shape().isRequired,
};

export default App;
