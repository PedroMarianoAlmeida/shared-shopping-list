import type { AppProps } from 'next/app';

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import AppDrawer from '../src/components/AppDrawer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <CssBaseline />

      <AppDrawer>
        <Component {...pageProps} />
      </AppDrawer>
    </>
  );
}

export default MyApp;
