import CircularProgress from '@material-ui/core/CircularProgress';
import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/core/styles';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import { auth, db } from '../../../config/firebaseConfig';
import ChatItem from './ChatItem';

const ChatListLoaded = ({ user }) => {
  const useStyles = makeStyles((theme) => ({
    chatSpace: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  }));
  const classes = useStyles();

  const [chatData, loading] = useCollectionData(
    db.collection('chat').where('users', 'array-contains', user.uid),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  return (
    <>
      {loading ? (
        <CircularProgress />
      ) : (
        <List className={classes.chatSpace}>
          {chatData.map((individualChat) => (
            <ChatItem chatData={individualChat} user={user} />
          ))}
        </List>
      )}
    </>
  );
};

const ChatList = () => {
  const [user] = useAuthState(auth);
  return <>{user ? <ChatListLoaded user={user} /> : <CircularProgress />}</>;
};

export default ChatList;
