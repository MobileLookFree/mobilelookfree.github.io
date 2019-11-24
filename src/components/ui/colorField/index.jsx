import { withStyles } from '@material-ui/styles';
import ColorField from './ColorField';

const styles = {
  colorField: {
    width: '200%',
    height: '100%',
    position: 'absolute',
    zIndex: '-1',
    left: 0,
    background: ({ darkTheme }) => (darkTheme ? 'linear-gradient(129.79deg, #59129B 22.05%, #5430E6 50.2%)' : 'linear-gradient(129.79deg, #DBFFFF 22.05%, #FFEAFA 72.03%)'),
    transform: ({ coordinateX }) => `translate3d(-${coordinateX}px, 0px, 0px)`,
  },
  '@media (pointer: coarse) and (hover: none)': {
    colorField: {
      width: '100%',
    },
  },
};

export default withStyles(styles)(ColorField);
