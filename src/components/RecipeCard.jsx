import { Link } from "react-router-dom";
import { useRecipeStore } from "../store/useRecipeStore.js";
import { StarIcon } from "../assets/svgs.jsx";

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
        <div>
          <h3 className="text-3xl font-bold">Healthy Recipe</h3>
          <p className="flex justify-between">
            <span className="text-lg font-semibold text-orange">With Features</span>
            <span className="text-sm tracking-wider text-silver">See all</span>
          </p>
        </div>
        <article className="mt-8 grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-6">
          {recipes.map((recipe) => (
            <div className="card-rounded card-shadow flex flex-col bg-white p-4" key={recipe.id}>
              <img
                className="rounded-full border-4 border-orange"
                src={recipe.image}
                alt={recipe.title}
              />
              <p className="mt-4 text-lg font-bold text-dark">{recipe.title}</p>
              <div className="flex justify-between">
                <span className="text-sm tracking-wider text-silver">{food}</span>
                <div className= "gap-1 rounded-3xl px-2 py-0.5 bg-orange flex flex-row-reverse items-center justify-between">
                  <StarIcon />
                  <p className="text-[0.5rem] text-white">5.0</p>
                </div>
              </div>

              <Link
                className="mt-auto"
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
