import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';

import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../../config/firebaseConfig';

import UserLogout from '../UserLogout';

const UserInteraction = () => {
  const [user, loading] = useAuthState(auth);

  return (
    <>
      {loading ? (
        <CircularProgress color="secondary" />
      ) : user ? (
        <UserLogout />
      ) : (
        <Typography>Visitor</Typography>
      )}
    </>
  );
};

export default UserInteraction;
