import React from 'react';

import { createStyles, makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Container from '@material-ui/core/Container';

import UserInteraction from './LoginSystem/WaitUserLoad/UserInteractionAppBar';
import ChatLoading from './UserLoggedIn/Chat/ChatLoading';

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

    chatSpace: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },

    chatItem: {
      marginTop: theme.spacing(1),
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
        <div className={`${classes.toolbar}`}>
          <ChatLoading />
        </div>
        <Divider />
        <List className={classes.chatSpace}>
          <Avatar className={classes.chatItem}>A</Avatar>
          <Avatar className={classes.chatItem}>B</Avatar>
          <Avatar className={classes.chatItem}>C</Avatar>
        </List>
      </Drawer>
      <Container>
        <main className={classes.content}>{children}</main>
      </Container>
    </>
  );
}
