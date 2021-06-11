import { createContext, useState } from 'react';

export const CurrentChatContext = createContext(undefined);

const CurrentChatContextProvider = ({ children }) => {
  const [currentChat, setCurrentChat] = useState('chatA');
  return (
    <CurrentChatContext.Provider value={{ currentChat, setCurrentChat }}>
      {children}
    </CurrentChatContext.Provider>
  );
};

export default CurrentChatContextProvider;
