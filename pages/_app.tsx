import type { AppProps } from 'next/app';

import CssBaseline from '@material-ui/core/CssBaseline';

import AppDrawer from '../src/components/AppDrawer';
import CurrentChatContextProvider from './../src/contexts/CurrentChatContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <CssBaseline />
      <CurrentChatContextProvider>
        <AppDrawer>
          <Component {...pageProps} />
        </AppDrawer>
      </CurrentChatContextProvider>
    </>
  );
}

export default MyApp;
