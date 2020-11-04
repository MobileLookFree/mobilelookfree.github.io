import React from 'react';
import Button from '../ui/button';
import Title from '../ui/title';
import ColorField from '../ui/colorField';
import SuperLink from '../ui/SuperLink';

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
        <SuperLink href={2}>Клик</SuperLink>
      </div>
    );
  }
}

export default App;
