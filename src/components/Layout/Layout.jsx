import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';

const Layout = () => {
  
  return (
    <>
      <Header />
      <Suspense fallback={null}>        
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
