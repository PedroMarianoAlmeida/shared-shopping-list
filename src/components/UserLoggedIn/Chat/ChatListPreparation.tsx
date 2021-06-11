import { useState, useEffect } from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import { auth, db } from '../../../config/firebaseConfig';
import ChatList from './ChatList';

const ChatUsers = ({ user }) => {
  const [chatUsers, setChatUsers] = useState([]);

  const [chatData, loading] = useCollectionData(
    db.collection('chat').where('users', 'array-contains', user.uid),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  useEffect(() => {
    if (chatData) {
      const newChatUsers = chatData
        .map((chat) => chat.users.filter((chatUser) => chatUser !== user.uid))
        .flat();

      setChatUsers(newChatUsers);
    }
  }, [chatData]);

  return (
    <>
      {loading && chatUsers ? (
        <CircularProgress />
      ) : (
        <ChatList chatData={chatData} chatUsers={chatUsers} />
      )}
    </>
  );
};

const ChatListPreparation = () => {
  const [user] = useAuthState(auth);
  return <>{user ? <ChatUsers user={user} /> : <CircularProgress />}</>;
};

export default ChatListPreparation;
