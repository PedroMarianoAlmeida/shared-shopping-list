import type { AppProps } from 'next/app';

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

import AppDrawer from '../src/components/Wrapper/AppDrawer';

const appBarHeight = '64px';
const drawerWidth = '45px';

const useStyles = makeStyles({
  main: {
    marginTop: appBarHeight,
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />

      <AppDrawer drawerWidth={drawerWidth} appBarHeight={appBarHeight}>
        <Container className={classes.main}>
          <Component {...pageProps} />
        </Container>
      </AppDrawer>
    </>
  );
}

export default MyApp;
