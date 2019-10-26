import Button from './Button';
import { withStyles } from '@material-ui/styles';

const styles = () => ({
  '@global': {
    body: {
      background: ({ darktheme }) => (darktheme ? '#242424' : 'white')
    }
  },
  button: {
    color: ({ darktheme }) => (darktheme ? '#242424' : 'white'),
    background: ({ darktheme }) => (darktheme ? 'white' : '#242424'),
    height: '64px',
    width: '256px',
    borderRadius: '32px',
    fontSize: '24px',
    fontWeight: '600',
    cursor: 'pointer',
    outline: 'none',  
    border: 'none',
    WebkitTapHighlightColor: 'rgba(0,0,0,0)',
    transition: '0.5s',
    '&:hover': {
        transform: 'scale(1.02)',
        background: ({ darktheme }) => (darktheme ? '#e0e0e0' : '#303030'),
    }
  }
});

export default withStyles(styles)(Button);
