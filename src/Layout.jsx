import { Outlet } from 'react-router-dom';
import { Search } from './components/Search.jsx';
import { RecipeCard } from './components/RecipeCard.jsx';

export const Layout = () => {
  return (
    <>
      <Search />
      <main>
        <Outlet />
      </main>
    </>
  );
};
