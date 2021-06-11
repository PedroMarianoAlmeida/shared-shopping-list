import { useContext } from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import { useAuthState } from 'react-firebase-hooks/auth';

import { CurrentChatContext } from './../../../contexts/CurrentChatContext';
import { auth } from '../../../config/firebaseConfig';

const ChatBox = ({ currentChat }) => {
  const [user] = useAuthState(auth);

  return <Paper>A</Paper>;
};

const CurrentChatLoaded = ({ currentChat }) => {
  const isAnyChat = JSON.stringify(currentChat) !== JSON.stringify({});

  return (
    <>
      {isAnyChat ? (
        <ChatBox currentChat={currentChat} />
      ) : (
        <Typography>No chats yet</Typography>
      )}
    </>
  );
};

const CurrentChat = () => {
  const { currentChat, chatLoading } = useContext(CurrentChatContext);
  console.log(currentChat);

  return (
    <>
      {chatLoading ? (
        <CircularProgress />
      ) : (
        <CurrentChatLoaded currentChat={currentChat} />
      )}
    </>
  );
};

export default CurrentChat;
