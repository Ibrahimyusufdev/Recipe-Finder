import { useParams } from "react-router-dom";
import { useRecipeStore } from "../store/useRecipeStore.js";
import DOMPurify from "dompurify";
import { Link } from "react-router-dom";
import { BackIcon } from "../assets/svgs.jsx";
import { Toaster, toast } from "react-hot-toast";
import { LoadingSpin } from "../components/LoadingSpin.jsx";
import { useEffect } from "react";

export const RecipeDetails = () => {
  const fullRecipe = useRecipeStore((state) => state.fullRecipe);
  const loading = useRecipeStore((state) => state.loading);
  const error = useRecipeStore((state) => state.error);
  const setFavoriteRecipe = useRecipeStore((state) => state.setFavoriteRecipe);
  const setShoppingList = useRecipeStore((state) => state.setShoppingList);
  const displayFullRecipes = useRecipeStore((state) => state.displayFullRecipes);

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      displayFullRecipes(id);
    }
  }, [id, displayFullRecipes]);

  if (loading) return <LoadingSpin />;
  if (error) return <p className="text-red-500">Error: {error}</p>;

  return (
    <>
      <section className="mt-4">
        <Toaster position="top-right" />
        <div className="container mx-auto px-4">
          <Link className="mt-5" to="/">
            <BackIcon />
          </Link>

          <>
            <img className="mt-6 rounded-md" src={fullRecipe.image} alt={fullRecipe.title} />
            <h1 className="mt-6 text-5xl font-bold">{fullRecipe.title}</h1>
            <p
              className="mt-4 line-clamp-5 text-justify leading-7"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(fullRecipe?.summary ?? "No Summary Found"),
              }}
            />

            <div>
              <h3 className="mt-6 text-4xl">Ingredients</h3>
              <ul className="ml-6 mt-6 list-decimal space-y-4">
                {fullRecipe?.extendedIngredients?.length > 0 ? (
                  fullRecipe.extendedIngredients.slice(0, 5).map((ingredient) => (
                    <li
                      key={ingredient.id}
                      className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between"
                    >
                      <p className="text-sm text-dark">{ingredient.original}</p>
                      <button
                        onClick={() => setShoppingList(ingredient)}
                        className="rounded-md bg-orange px-4 py-2 text-sm text-white transition-colors hover:bg-orange/90"
                      >
                        Add to shopping List
                      </button>
                    </li>
                  ))
                ) : (
                  <p>No Ingredient Found</p>
                )}
              </ul>
            </div>

            <article className="mt-6">
              <div
                className="prose max-w-none"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(
                    fullRecipe.instructions?.slice(0, 100) ?? "No Instructions"
                  ),
                }}
              />
            </article>
            <article>
              <div>
                <h1 className="mb-3 text-xl font-bold">Diets</h1>
                <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-4">
                  {fullRecipe?.diets?.length > 0 ? (
                    fullRecipe.diets.map((diet) => (
                      <p className="border border-orange p-2 capitalize" key={crypto.randomUUID()}>
                        {diet}
                      </p>
                    ))
                  ) : (
                    <p>No Diets Found</p>
                  )}
                </div>
              </div>
              <div className="mt-4">
                <h1 className="mb-3 text-xl font-bold">Dish Types</h1>
                <div className="grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] gap-4">
                  {fullRecipe?.dishTypes?.length > 0 ? (
                    fullRecipe.dishTypes.map((dish) => (
                      <p className="border border-orange p-2 capitalize" key={crypto.randomUUID()}>
                        {dish}
                      </p>
                    ))
                  ) : (
                    <p>No Dish Information available</p>
                  )}
                </div>
              </div>

              <div className="mt-6">
                <h1 className="mb-3 text-xl font-bold">Prep Time</h1>
                <p className="max-w-20 border border-orange p-2 capitalize">
                  {fullRecipe?.readyInMinutes}min
                </p>
              </div>

              <h2 className="mb-4 mt-6 text-xl font-bold">Summary</h2>
            </article>
            <a
              className="text-blue-500 underline transition duration-200 hover:text-blue-800"
              href={fullRecipe?.sourceUrl}
              target="_blank"
            >
              Read More about the recipe
            </a>
            <button
              className="mt-5 block rounded-md bg-orange px-4 py-2 font-semibold text-white"
              onClick={() => {
                setFavoriteRecipe(fullRecipe);
              }}
            >
              Add to Favorite
            </button>
          </>
        </div>
      </section>
    </>
  );
};
