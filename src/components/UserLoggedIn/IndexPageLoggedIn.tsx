import { useAuthState } from 'react-firebase-hooks/auth';

import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';

import { auth } from '../../config/firebaseConfig';
import CurrentChat from './Chat/CurrentChat';

const IndexPageLoggedIn = () => {
  const [user, loading, error] = useAuthState(auth);

  return (
    <div>
      {loading ? (
        <CircularProgress />
      ) : error ? (
        <Typography>Something went wrong</Typography>
      ) : (
        <CurrentChat />
      )}
    </div>
  );
};

export default IndexPageLoggedIn;
