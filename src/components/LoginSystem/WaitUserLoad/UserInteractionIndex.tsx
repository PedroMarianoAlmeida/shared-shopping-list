import CircularProgress from '@material-ui/core/CircularProgress';

import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../../config/firebaseConfig';
import IndexPageLoggedIn from '../../UserLoggedIn/IndexPageLoggedIn';
import LoginAndCreateUser from '../LoginCreateUser/LoginAndCreateUser';

const UserInteractionIndexPage = () => {
  const [user, loading] = useAuthState(auth);

  return (
    <>
      {loading ? (
        <CircularProgress color="secondary" />
      ) : user ? (
        <IndexPageLoggedIn />
      ) : (
        <LoginAndCreateUser />
      )}
    </>
  );
};

export default UserInteractionIndexPage;
