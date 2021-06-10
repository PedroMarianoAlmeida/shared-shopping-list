import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';

import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  chatSpace: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  chatItem: {
    marginTop: theme.spacing(1),
  },
}));

const ChatList = () => {
  const classes = useStyles();

  return (
    <List className={classes.chatSpace}>
      <Avatar className={classes.chatItem}>A</Avatar>
      <Avatar className={classes.chatItem}>B</Avatar>
      <Avatar className={classes.chatItem}>D</Avatar>
    </List>
  );
};

export default ChatList;
