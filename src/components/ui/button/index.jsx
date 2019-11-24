import { withStyles } from '@material-ui/styles';
import Button from './Button';

const styles = () => ({
  '@global': {
    body: {
      background: ({ darkTheme }) => (darkTheme ? '#242424' : 'white')
    },
  },
  button: {
    color: ({ darkTheme }) => (darkTheme ? '#242424' : 'white'),
    background: ({ darkTheme }) => (darkTheme ? 'white' : '#242424'),
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
      background: ({ darkTheme }) => (darkTheme ? '#e0e0e0' : '#303030'),
    },
  },
});

export default withStyles(styles)(Button);
