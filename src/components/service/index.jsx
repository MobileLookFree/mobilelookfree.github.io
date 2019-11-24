import { withStyles } from '@material-ui/styles';
import App from './App';

const styles = {
  '@global': {
    body: {
      margin: 0,
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
      transition: 'background 1000ms',
    },
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '100px',
  },
};

export default withStyles(styles)(App);
