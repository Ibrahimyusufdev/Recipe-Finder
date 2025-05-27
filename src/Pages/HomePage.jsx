import { Search } from '../components/Search.jsx';
import { RecipeCard } from '../components/RecipeCard.jsx';
import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer.jsx';

export const HomePage = () => {
  return (
    <>
      <Search />
      <RecipeCard />
      <Footer />
    </>
  );
};
