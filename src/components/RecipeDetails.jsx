import { useParams } from "react-router-dom";
import { useRecipeStore } from "../store/useRecipeStore.js";
import DOMPurify from "dompurify";

export const RecipeDetails = () => {
  const fullRecipe = useRecipeStore((state) => state.fullRecipe);
  const food = useRecipeStore((state) => state.food);

  const { id } = useParams();

  return (
    <>
      <p>Recipe ID: {id}</p>
      <h1>Food Type: {food}</h1>
      <h3>Recipe Title: {fullRecipe.title}</h3>
      <img src={fullRecipe.image} alt={fullRecipe.title} />
      <h3>Ingredients</h3>
      {/* {fullRecipe.extendedIngredients.map((ingredient) => (
        <ul key={ingredient.id}>
          <li key={ingredient.id}>{ingredient.original}</li>
        </ul>
      ))} */}

      <div>
        <p>Instructions:</p>
        {fullRecipe.instructions ?? "No Instructions"}
      </div>
      <article>
        <h1>Diets</h1>
        {/* {fullRecipe.diets.map((diet) => (
          <div>
            <p>{diet}</p>
          </div>
        ))} */}
        <h1>Dish Types</h1>
        {/* {fullRecipe.dishTypes.map((dish) => (
          <div>
            <p>{dish}</p>
          </div>
        ))} */}
        <div className="otherInfo">
          <span>Ready In Minutes: {fullRecipe.readyInMinutes}min</span>
        </div>
        <h2>Summary</h2>
        <p dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(fullRecipe.summary)}} />
        <p></p>
      </article>
      <a href={fullRecipe.sourceUrl} target="_blank">
        Read More about the recipe
      </a>
    </>
  );
};
