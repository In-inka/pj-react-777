import authSelectors from '../../redux/auth/auth-selectors';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export default function PublicRoute({ children }) {
    const isHasMetricData = useSelector(
      authSelectors.getIsHasUserMetricData,
    );
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return !isLoggedIn ? (
    children
  ) : isHasMetricData ? (
    <Navigate to="/diary" />
  ) : (
    <Navigate to="/profile" />
  );
}

// export default function PublicRoute({ children }) {
//   return children;
// }
