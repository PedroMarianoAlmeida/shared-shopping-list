import CircularProgress from '@material-ui/core/CircularProgress';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import { auth, db } from './../../../config/firebaseConfig';

const Chat = ({ user }) => {
  const [value, loading] = useCollectionData(
    db.collection('chat').where('users', 'array-contains', user.uid),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );
  return <>{loading && <CircularProgress />}</>;
};

const ChatLoading = () => {
  const [user] = useAuthState(auth);

  return <>{user && <Chat user={user} />}</>;
};

export default ChatLoading;
