import { useRecipeStore } from "../store/useRecipeStore.js";
import DOMPurify from "dompurify";
import { Link } from "react-router-dom";
import { BackIcon } from "../assets/svgs.jsx";

export const FavoriteRecipe = () => {
  const favoriteRecipe = useRecipeStore((state) => state.favoriteRecipe);


  if (favoriteRecipe.length === 0) {
    return (
      <section className="container mx-auto mt-4 px-4">
        <Link to="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800">
          <BackIcon /> Back to Recipes
        </Link>
        <p className="mt-6 text-center text-gray-500">No Favorites Recipes</p>
      </section>
    );
  }

  return (
    <section className="mt-6">
      <div className="container mx-auto px-4">
        <Link to="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800">
          <BackIcon /> Back to Recipes
        </Link>
        <h1>My Favorites Recipes</h1>
        <article className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {favoriteRecipe.map((recipe) => (
            <div key={recipe.id} className="rounded-md border bg-white p-4 shadow-sm">
              <img
                className="h-48 w-full rounded object-cover"
                src={recipe.image}
                alt={recipe.title}
              />
              <h2 className="mt-6 text-5xl font-bold">{recipe.title}</h2>
              <Link
                to={`/recipe/${recipe.id}`}
                className="mt-4 inline-block text-blue-600 hover:text-blue-800"
              >
                View Details
              </Link>
            </div>
          ))}
        </article>
      </div>
    </section>
  );
};
