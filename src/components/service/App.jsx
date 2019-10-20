import React from 'react';
import Button from '../ui/button';
import Title from '../ui/title';

class App extends React.PureComponent {
  state = {
    darktheme: false,
  };

  componentDidMount() {
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    if (darkModeMediaQuery.matches) {
      this.setState((prevState) => ({ ...prevState, darktheme: true }))
    }
    darkModeMediaQuery.addListener((event) => {
    event.matches
      ? this.setState((prevState) => ({ ...prevState, darktheme: true }))
      : this.setState((prevState) => ({ ...prevState, darktheme: false }));
    });
  };

  selectTheme = () => {
    const { darktheme } = this.state;
    this.setState((prevState) => ({ ...prevState, darktheme: !darktheme }));
  };

  render() {
    const { darktheme } = this.state;
    const { classes } = this.props;
    return (
      <div className={classes.wrapper}>
        <Title darktheme={darktheme} />
        <Button darktheme={darktheme} selectTheme={this.selectTheme} />
      </div>
    );
  }
}
export default App;
