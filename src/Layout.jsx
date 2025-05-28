import { Outlet } from 'react-router-dom';
import { NavBar } from './components/NavBar.jsx';
import { Footer } from './components/Footer.jsx';

export const Layout = () => {
  return (
    <div className='min-h-screen'>
      <NavBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
