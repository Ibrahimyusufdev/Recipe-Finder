import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./Pages/HomePage.jsx";
import { RecipeDetails } from "./components/RecipeDetails.jsx";



export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recipe/:id" element={<RecipeDetails/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}