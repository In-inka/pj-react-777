import authSelectors from "../../redux/auth/auth-selectors";
import { useSelector } from "react-redux";
import { Navigate } from 'react-router-dom';

export default function PrivateRoute(
    
{ children}) {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    return (
            isLoggedIn ? children : <Navigate to="/"/>
    )
}

// export default function PrivateRoute({ children }) {
//   return children;
// }
