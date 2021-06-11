import { useContext } from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import { useAuthState } from 'react-firebase-hooks/auth';

import { CurrentChatContext } from './../../../contexts/CurrentChatContext';
import { auth } from '../../../config/firebaseConfig';

const ChatBox = ({ currentChat, otherUserEmail }) => {
  const [user] = useAuthState(auth);
  console.log(currentChat.messages);
  console.log(otherUserEmail);
  return (
    <Paper>
      <Typography>Messages from {otherUserEmail.email}</Typography>
    </Paper>
  );
};

const CurrentChatLoaded = ({ currentChat, otherUserEmail }) => {
  const isAnyChat = JSON.stringify(currentChat) !== JSON.stringify({});

  return (
    <>
      {isAnyChat ? (
        <ChatBox currentChat={currentChat} otherUserEmail={otherUserEmail} />
      ) : (
        <Typography>No chats yet</Typography>
      )}
    </>
  );
};

const CurrentChat = () => {
  const { currentChat, chatLoading, otherUserEmail } =
    useContext(CurrentChatContext);
  console.log(currentChat);

  return (
    <>
      {chatLoading ? (
        <CircularProgress />
      ) : (
        <CurrentChatLoaded
          currentChat={currentChat}
          otherUserEmail={otherUserEmail}
        />
      )}
    </>
  );
};

export default CurrentChat;
