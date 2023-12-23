import { Outlet } from 'react-router-dom';
import { AppBar } from 'components/AppBar';

const Layout = () => {
  return (
    <div>
      <AppBar />
      <Outlet />
    </div>
  );
};

export default Layout;
