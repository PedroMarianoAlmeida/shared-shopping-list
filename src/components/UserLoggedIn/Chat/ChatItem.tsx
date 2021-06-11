import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Tooltip from '@material-ui/core/Tooltip';

import { useDocumentData } from 'react-firebase-hooks/firestore';
import { db } from '../../../config/firebaseConfig';

const useStyles = makeStyles((theme) => ({
  chatItem: {
    marginTop: theme.spacing(1),
  },
}));

const ChatItemLoaded = ({ otherUserEmail }) => {
  const classes = useStyles();

  return (
    <Tooltip title={otherUserEmail.email}>
      <Avatar className={classes.chatItem}>
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
        <ChatItemLoaded otherUserEmail={otherUserEmail} />
      )}
    </>
  );
};

export default ChatItem;
