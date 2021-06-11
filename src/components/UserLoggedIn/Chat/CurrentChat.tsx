import { useContext } from 'react';

import { CurrentChatContext } from './../../../contexts/CurrentChatContext';

const CurrentChat = () => {
  const { currentChat } = useContext(CurrentChatContext);
  console.log(currentChat);

  return <div>Current Chat</div>;
};

export default CurrentChat;
