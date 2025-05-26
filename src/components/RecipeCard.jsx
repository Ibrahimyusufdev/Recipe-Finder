import { Link } from "react-router-dom";
import { useRecipeStore } from "../store/useRecipeStore.js";

export const RecipeCard = () => {
  const food = useRecipeStore((state) => state.food);
  const recipes = useRecipeStore((state) => state.recipes);
  const displayFullRecipes = useRecipeStore((state) => state.displayFullRecipes);
  const loading = useRecipeStore((state) => state.loading);
  const error = useRecipeStore((state) => state.error);

  return (
    <section className="border border-[#000] p-2">
      <div className="container mx-auto  px-4 grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4 ">
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {recipes.map((recipe) => (
          <div className="mb-4 border border-neutral-950" key={recipe.id}>
            <p>Food type: {food}</p>
            <p>Recipe Title: {recipe.title}</p>
            <img src={recipe.image} alt={recipe.title} width={50} />
            <Link to={`recipe/${recipe.id}`} onClick={() => displayFullRecipes(recipe.id)}>
              View Full Details
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};
