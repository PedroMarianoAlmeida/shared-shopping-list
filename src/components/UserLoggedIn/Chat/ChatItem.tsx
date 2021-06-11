import { useContext } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Tooltip from '@material-ui/core/Tooltip';

import { useDocumentData } from 'react-firebase-hooks/firestore';
import { db } from '../../../config/firebaseConfig';
import { CurrentChatContext } from './../../../contexts/CurrentChatContext';

const useStyles = makeStyles((theme) => ({
  chatItem: {
    marginTop: theme.spacing(1),
  },
}));

const ChatItemLoaded = ({ otherUserEmail, chatData }) => {
  const classes = useStyles();
  const { setCurrentChat, setOtherUserEmail } = useContext(CurrentChatContext);

  const handleClick = () => {
    setCurrentChat(chatData);
    setOtherUserEmail(otherUserEmail);
  };

  return (
    <Tooltip title={otherUserEmail.email}>
      <Avatar className={classes.chatItem} onClick={handleClick}>
        {otherUserEmail.email.substring(0, 2)}
      </Avatar>
    </Tooltip>
  );
};

const ChatItem = ({ chatData, user }) => {
  const classes = useStyles();
  const otherUserId = chatData.users.filter(
    (chatUser) => chatUser !== user.uid
  )[0];

  const [otherUserEmail, loading] = useDocumentData(
    db.collection('user').doc(otherUserId),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  return (
    <>
      {loading ? (
        <Avatar className={classes.chatItem}>...</Avatar>
      ) : (
        <ChatItemLoaded otherUserEmail={otherUserEmail} chatData={chatData} />
      )}
    </>
  );
};

export default ChatItem;
