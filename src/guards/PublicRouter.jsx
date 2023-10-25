//import { useSelector } from 'react-redux';
//import { Navigate, useLocation } from 'react-router-dom';

const PublicRouter = ({ children }) => {
  //const isLoggedIn = useSelector(selector);
  // const location = useLocation();

  /*   return !isLoggedIn ? (
    children
  ) : (
    <Navigate to={location.state ?? '/profile'} />
  ); */
  return children;
};

export default PublicRouter;
