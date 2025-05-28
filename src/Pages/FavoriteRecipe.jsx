import { useRecipeStore } from "../store/useRecipeStore.js";
import DOMPurify from "dompurify";
import { Link } from "react-router-dom";
import { BackIcon } from "../assets/svgs.jsx";

export const FavoriteRecipe = () => {
  const favoriteRecipe = useRecipeStore((state) => state.favoriteRecipe);
  const setShoppingList = useRecipeStore((state) => state.setShoppingList);

  const shortenedInstructions = favoriteRecipe.instructions
    ? favoriteRecipe.instructions.split(" ").slice(0, 100).join(" ") + "..."
    : "No Instructions";

  return (
    <>
      <section className="mt-6">
        <div className="container mx-auto px-4">
          <Link className="mt-5" to="/">
            <BackIcon />
          </Link>
          <>
            {favoriteRecipe.length !== 0 ? (
              <article>
                <img
                  className="mt-6 rounded-md"
                  src={favoriteRecipe.image}
                  alt={favoriteRecipe.title}
                />
                <h1 className="mt-6 text-5xl font-bold">{favoriteRecipe.title}</h1>
                <p
                  className="mt-4 line-clamp-5 text-justify leading-7"
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(favoriteRecipe.summary),
                  }}
                />

                <div>
                  <h3 className="mt-6 text-4xl">Ingredients</h3>
                  <ul className="ml-6 mt-6 list-decimal space-y-4">
                    {favoriteRecipe.extendedIngredients.slice(0, 5).map((ingredient) => (
                      <li
                        className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between"
                        key={crypto.randomUUID()}
                      >
                        <p className="text-sm text-dark">{ingredient.original}</p>
                        <button
                          className="rounded-md bg-orange px-4 py-2 text-sm text-white transition-colors hover:bg-orange/90"
                          onClick={() => setShoppingList(ingredient)}
                        >
                          Add to Shopping List
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                <article className="mt-6">
                  <div
                    className="prose max-w-none"
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(shortenedInstructions ?? "No Instructions"),
                    }}
                  />
                </article>
                <article>
                  <div>
                    <h1 className="mb-3 text-xl font-bold">Diets</h1>
                    <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-4">
                      {favoriteRecipe.diets.map((diet) => (
                        <p
                          className="border border-orange p-2 capitalize"
                          key={crypto.randomUUID()}
                        >
                          {diet}
                        </p>
                      ))}
                    </div>
                  </div>
                  <div className="mt-4">
                    <h1 className="mb-3 text-xl font-bold">Dish Types</h1>
                    <div className="grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] gap-4">
                      {favoriteRecipe.dishTypes.map((dish) => (
                        <p
                          className="border border-orange p-2 capitalize"
                          key={crypto.randomUUID()}
                        >
                          {dish}
                        </p>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6">
                    <h1 className="mb-3 text-xl font-bold">Prep Time</h1>
                    <p className="max-w-20 border border-orange p-2 capitalize">
                      {favoriteRecipe.readyInMinutes}min
                    </p>
                  </div>

                  <h2 className="mb-4 mt-6 text-xl font-bold">Summary</h2>
                </article>
                <a
                  className="text-blue-500 underline transition duration-200 hover:text-blue-800"
                  href={favoriteRecipe.sourceUrl}
                  target="_blank"
                >
                  Read More about the recipe
                </a>
              </article>
            ) : (
              <p className="text-red-400 mt-6">No Favorite Recipe Found</p>
            )}
          </>
        </div>
      </section>
    </>
  );
};
