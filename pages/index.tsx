import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

import LoginAndCreateUser from './../src/components/LoginSystem/LoginCreateUser/LoginAndCreateUser';
import UserInteractionIndexPage from '../src/components/LoginSystem/WaitUserLoad/UserInteractionIndex';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
});

export default function Home() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Typography variant="h1" align="center">
        Welcome
      </Typography>

      <UserInteractionIndexPage />
    </Container>
  );
}
