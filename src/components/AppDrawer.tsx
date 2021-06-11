import React from 'react';

import { createStyles, makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';

import UserInteraction from './LoginSystem/WaitUserLoad/UserInteractionAppBar';
import ChatList from './UserLoggedIn/Chat/ChatList';

const appBarHeight = '64px';
const drawerWidth = '45px';

const useStyles = makeStyles((theme) =>
  createStyles({
    appBar: {
      width: `calc(100% - ${drawerWidth})`,
      marginLeft: drawerWidth,
      height: appBarHeight,
    },

    menu: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: '100%',
    },

    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,

    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(3),
      width: `calc(100% - ${drawerWidth})`,
      marginLeft: drawerWidth,
      marginTop: appBarHeight,
    },
  })
);

export default function AppDrawer({ children }) {
  const classes = useStyles();

  return (
    <>
      <AppBar className={classes.appBar}>
        <Toolbar className={classes.menu}>
          <Typography>webChat</Typography>
          <UserInteraction />
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={`${classes.toolbar}`} />
        <Divider />
        <ChatList />
      </Drawer>
      <Container>
        <main className={classes.content}>{children}</main>
      </Container>
    </>
  );
}
