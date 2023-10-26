import authSelectors from '../../redux/auth/auth-selectors';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export default function PublicRoute({ children }) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (!isLoggedIn ? children: <Navigate to="/diary"/>);
}

// export default function PublicRoute({ children }) {
//   return children;
// }
