import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './Pages/HomePage.jsx';
import { RecipeDetails } from './Pages/RecipeDetails.jsx';
import { Layout } from './Layout.jsx';
import { ShoppingList } from './Pages/ShoppingList.jsx';
import { FavoriteRecipe } from './Pages/FavoriteRecipe.jsx';
export const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='/recipe/:id' element={<RecipeDetails />} />
          <Route path='/favoriteRecipe' element={<FavoriteRecipe />} />
          <Route path='/shoppingList' element={<ShoppingList />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
};
