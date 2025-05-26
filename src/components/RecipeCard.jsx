import { Link } from "react-router-dom";
import { useRecipeStore } from "../store/useRecipeStore.js";

export const RecipeCard = () => {
  const food = useRecipeStore((state) => state.food);
  const recipes = useRecipeStore((state) => state.recipes);
  const displayFullRecipes = useRecipeStore((state) => state.displayFullRecipes);
  const loading = useRecipeStore((state) => state.loading);
  const error = useRecipeStore((state) => state.error);

  return (
    <section className="mt-8 border border-[#0f0d0d] p-2">
      <div className="container mx-auto px-4">
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        <article className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-4">
          {recipes.map((recipe) => (
            
            <div className="card-rounded card-shadow p-4 bg-white" key={recipe.id}>
              <img className="rounded-full border-4 border-orange" src={recipe.image} alt={recipe.title}  />
              <p>Food type: {food}</p>
              <p>Recipe Title: {recipe.title}</p>
              <Link to={`recipe/${recipe.id}`} onClick={() => displayFullRecipes(recipe.id)}>
                View Full Details
              </Link>
            </div>
          ))}
        </article>
      </div>
      <button className="rounded bg-black p-2 text-white">Submit</button>
    </section>
  );
};
