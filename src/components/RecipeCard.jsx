import { Link } from "react-router-dom";
import { useRecipeStore } from "../store/useRecipeStore.js";
import { StarIcon } from "../assets/svgs.jsx";
import { LoadingSpin } from "./LoadingSpin.jsx";

export const RecipeCard = () => {
  const food = useRecipeStore((state) => state.food);
  const recipes = useRecipeStore((state) => state.recipes);
  const displayFullRecipes = useRecipeStore((state) => state.displayFullRecipes);
  const loading = useRecipeStore((state) => state.loading);
  const error = useRecipeStore((state) => state.error);

  return (
    <section className="mt-8 p-2">
      <div className="container mx-auto px-4">
        {loading && <LoadingSpin />}
        {error && <p>Error: {error}</p>}
        <div>
          <h3 className="text-3xl font-bold">Healthy Recipes</h3>

          <span className="text-sm tracking-wider text-silver">See all</span>
        </div>
        <article className="mt-8 grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-6">
          {recipes.map((recipe) => (
            <div
              className="card-rounded card-shadow flex flex-col gap-4 bg-white p-4"
              key={recipe.id}
            >
              <img
                className="rounded-full border-4 border-orange"
                src={recipe.image}
                alt={recipe.title}
              />
              <p className="text-lg font-bold text-dark">{recipe.title}</p>
              <div className="flex justify-between">
                <span className="text-sm tracking-wider text-silver">{food}</span>
                <div className="flex items-center justify-between gap-[0.13rem] rounded-3xl bg-orange px-1 py-0.5">
                  <StarIcon />
                  <p className="text-xs font-semibold text-white">5.0</p>
                </div>
              </div>

              <Link
                className="mt-auto text-blue-500 underline transition duration-200 hover:text-blue-800"
                to={`recipe/${recipe.id}`}
                onClick={() => displayFullRecipes(recipe.id)}
              >
                View Full Details
              </Link>
            </div>
          ))}
        </article>
      </div>
    </section>
  );
};
