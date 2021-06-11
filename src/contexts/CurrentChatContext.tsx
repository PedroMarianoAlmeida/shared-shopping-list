import { createContext, useState } from 'react';

export const CurrentChatContext = createContext(undefined);

const CurrentChatContextProvider = ({ children }) => {
  const [currentChat, setCurrentChat] = useState({});
  const [otherUserEmail, setOtherUserEmail] = useState('');
  const [chatLoading, setChatLoading] = useState(false);

  console.log(otherUserEmail);
  return (
    <CurrentChatContext.Provider
      value={{
        currentChat,
        setCurrentChat,
        chatLoading,
        setChatLoading,
        otherUserEmail,
        setOtherUserEmail,
      }}
    >
      {children}
    </CurrentChatContext.Provider>
  );
};

export default CurrentChatContextProvider;
