import App from './App';
import { withStyles } from '@material-ui/styles';

const styles = {
  '@global': {
    body: {
      margin: 0,
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
      transition: '1000ms'
    }
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '200px'
  },
};

export default withStyles(styles)(App);
