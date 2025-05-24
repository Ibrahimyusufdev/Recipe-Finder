import { Link } from "react-router-dom";
import { useRecipeStore } from "../store/useRecipeStore.js";

export const RecipeCard = () => {
  const food = useRecipeStore((state) => state.food);
  const recipes = useRecipeStore((state) => state.recipes);
  const displayFullRecipes = useRecipeStore((state) => state.displayFullRecipes);
  const loading = useRecipeStore((state) => state.loading);
  const error = useRecipeStore((state) => state.error);

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <p>Food type: {food}</p>
          <p>Recipe Title: {recipe.title}</p>
          <img src={recipe.image} alt={recipe.title} width={50} />
          <Link to={`recipe/${recipe.id}`} onClick={() => displayFullRecipes(recipe.id)}>
            View Full Details
          </Link>
        </div>
      ))}
    </>
  );
};
