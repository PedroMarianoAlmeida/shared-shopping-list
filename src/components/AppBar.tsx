import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import UserInteraction from './LoginSystem/WaitUserLoad/UserInteractionAppBar';

const MyAppBar = ({ appBarHeight }) => {
  const useStyles = makeStyles({
    root: {
      height: appBarHeight,
    },

    menu: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: '100%',
    },
  });

  const classes = useStyles();

  return (
    <>
      <AppBar className={classes.root}>
        <Toolbar className={classes.menu}>
          <Typography>webChat</Typography>
          <UserInteraction />
        </Toolbar>
      </AppBar>
    </>
  );
};

export default MyAppBar;
