import { Outlet } from 'react-router-dom';
import { NavBar } from './components/NavBar.jsx';
import { Footer } from './components/Footer.jsx';

export const Layout = () => {
  return (
    <>
      <NavBar />
      <main className='min-h-screen'>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
