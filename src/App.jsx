import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './Pages/HomePage.jsx';
import { RecipeDetails } from './Pages/RecipeDetails.jsx';
import { Layout } from './Layout.jsx';
import { NavBar } from './components/NavBar.jsx';

export const App = () => {
  return (
    <>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </BrowserRouter> */}
      <NavBar />
    </>
  );
};
