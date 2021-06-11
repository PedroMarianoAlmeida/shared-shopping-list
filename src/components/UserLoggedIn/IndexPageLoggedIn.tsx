import { useAuthState } from 'react-firebase-hooks/auth';
import { useDocumentData } from 'react-firebase-hooks/firestore';

import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';

import { auth, db } from '../../config/firebaseConfig';

const Chats = ({ chats }) => (
  <>
    {chats?.length > 0 ? (
      <Typography>Show Chat</Typography>
    ) : (
      <Typography>No Chats</Typography>
    )}
  </>
);

const IndexPageLoggedIn = () => {
  const [user] = useAuthState(auth);

  const [userCollection, loading, error] = useDocumentData(
    db.collection('user').doc(user.uid),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  return (
    <div>
      {loading ? (
        <CircularProgress />
      ) : error ? (
        <Typography>Something went wrong</Typography>
      ) : (
        <Chats chats={userCollection?.chats} />
      )}
    </div>
  );
};

export default IndexPageLoggedIn;
