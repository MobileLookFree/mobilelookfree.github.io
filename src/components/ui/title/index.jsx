import { withStyles } from '@material-ui/styles';
import Title from './Title';

const styles = {
  title: {
    color: ({ darkTheme }) => (darkTheme ? 'white' : '#242424'),
    transition: 'color 1000ms',
  },
};

export default withStyles(styles)(Title);
