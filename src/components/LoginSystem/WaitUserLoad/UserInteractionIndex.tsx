import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';

import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../../config/firebaseConfig';
import LoginAndCreateUser from '../LoginCreateUser/LoginAndCreateUser';

const UserInteractionIndexPage = () => {
  const [user, loading] = useAuthState(auth);

  return (
    <>
      {loading ? (
        <CircularProgress color="secondary" />
      ) : user ? (
        <Typography>Already Logged In</Typography>
      ) : (
        <LoginAndCreateUser />
      )}
    </>
  );
};

export default UserInteractionIndexPage;
