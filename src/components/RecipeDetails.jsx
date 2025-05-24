import { useParams } from "react-router-dom";
import { useRecipeStore } from "../store/useRecipeStore.js";
import DOMPurify from "dompurify";

export const RecipeDetails = () => {
  const fullRecipe = useRecipeStore((state) => state.fullRecipe);
  const food = useRecipeStore((state) => state.food);
  const loading = useRecipeStore((state) => state.loading);
  const error = useRecipeStore((state) => state.error);
  const setFavoriteRecipe = useRecipeStore((state) => state.setFavoriteRecipe);
  const setShoppingList = useRecipeStore((state) => state.setShoppingList);

  const { id } = useParams();

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {Object.keys(fullRecipe).length !== 0 ? (
        <>
          <p>Recipe ID: {id}</p>
          <h1>Food Type: {food}</h1>
          <h3>Recipe Title: {fullRecipe.title}</h3>
          <img src={fullRecipe.image} alt={fullRecipe.title} />
          <div>
            <h3>Ingredients</h3>
            <ul>
              {fullRecipe.extendedIngredients.map((ingredient) => (
                <li key={crypto.randomUUID()}>
                  <p>{ingredient.original}</p>
                  <button onClick={() => setShoppingList(ingredient)}>
                    Add to Shopping List
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <article>
            <h3>Instructions:</h3>
            <div
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(
                  fullRecipe.instructions || "No Instructions"
                ),
              }}
            />
          </article>
          <article>
            <h1>Diets</h1>
            <div>
              {fullRecipe.diets.map((diet) => (
                <p key={crypto.randomUUID()}>{diet}</p>
              ))}
            </div>
            <h1>Dish Types</h1>
            <div>
              {fullRecipe.dishTypes.map((dish) => (
                <p key={crypto.randomUUID()}>{dish}</p>
              ))}
            </div>

            <div className="otherInfo">
              <span>Ready In Minutes: {fullRecipe.readyInMinutes}min</span>
            </div>
            <h2>Summary</h2>
            <p
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(fullRecipe.summary),
              }}
            />
            <p></p>
          </article>
          <a href={fullRecipe.sourceUrl} target="_blank">
            Read More about the recipe
          </a>
          <button onClick={() => setFavoriteRecipe(fullRecipe)}>
            Add to Favorite
          </button>
        </>
      ) : (
        <p>No Recipe Found</p>
      )}
    </>
  );
};
