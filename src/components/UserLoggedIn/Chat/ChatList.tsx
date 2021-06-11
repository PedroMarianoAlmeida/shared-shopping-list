import { useContext, useEffect } from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';
import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/core/styles';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import { auth, db } from '../../../config/firebaseConfig';
import ChatItem from './ChatItem';
import { CurrentChatContext } from './../../../contexts/CurrentChatContext';

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

  //When the chat data is loaded, get the most recent chat and update the currentChat object
  const { setCurrentChat, setChatLoading } = useContext(CurrentChatContext);
  useEffect(() => {
    if (chatData?.length > 0) setCurrentChat(chatData[0]);
  }, [chatData]);

  useEffect(() => {
    setChatLoading(loading);
  }, [loading]);

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
  return <>{user && <ChatListLoaded user={user} />}</>;
};

export default ChatList;
