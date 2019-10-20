import Title from './Title';
import { withStyles } from '@material-ui/styles';

const styles = {
    title: {
        color: ({ darktheme }) => (darktheme ? 'white' : '#242424'),
      }
};

export default withStyles(styles)(Title);
