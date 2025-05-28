import { Outlet } from 'react-router-dom';
import { MenuBar } from './assets/svgs.jsx';
import { Footer } from './components/Footer.jsx';

export const Layout = () => {
  return (
    <>
      <MenuBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
