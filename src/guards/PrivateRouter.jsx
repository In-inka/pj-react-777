//import { useSelector } from 'react-redux';
//import { Navigate } from 'react-router-dom';

const PrivateRouter = ({ children }) => {
  // const isLoggedIn = useSelector(selector);
  //const redirect = !isLoggedIn && !isRefreshing;

  //return isLoggedIn ? children : <Navigate to="/" />;

  return children;
};

export default PrivateRouter;
