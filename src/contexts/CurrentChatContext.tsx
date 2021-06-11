import { createContext, useState } from 'react';

export const CurrentChatContext = createContext(undefined);

const CurrentChatContextProvider = ({ children }) => {
  const [currentChat, setCurrentChat] = useState({});
  const [chatLoading, setChatLoading] = useState(false);

  return (
    <CurrentChatContext.Provider
      value={{ currentChat, setCurrentChat, chatLoading, setChatLoading }}
    >
      {children}
    </CurrentChatContext.Provider>
  );
};

export default CurrentChatContextProvider;
