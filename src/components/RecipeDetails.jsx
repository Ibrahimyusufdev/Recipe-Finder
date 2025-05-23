import { useRecipeStore } from "../store/useRecipeStore.js";

export const RecipeDetails = () => {
  const fullRecipe = useRecipeStore((state) => state.fullRecipe);
  const food = useRecipeStore((state) => state.food);

  return (
    <>
      <h1>Food Type: {food}</h1>
      <h3>Recipe Title: {fullRecipe.title}</h3>
      <img src={fullRecipe.image} alt={fullRecipe.title} />
      {fullRecipe.extendedIngredients.map((ingredient) => (
        <ul key={ingredient.id}>
          <h3>Ingredients</h3>
          <li key={ingredient.id}>{ingredient.original}</li>
        </ul>
      ))}

      <div>
        <p>Instructions:</p>
        {fullRecipe.instructions} ?? "No Instructions"
      </div>
      <article>
        {fullRecipe.diets.map((diet) => (
          <div>
            <h1>Diets</h1>
            <p>{diet}</p>
          </div>
        ))}
        {fullRecipe.dishTypes.map((dish) => (
          <div>
            <h1>Dish Types</h1>
            <p>{dish}</p>
          </div>
        ))}
        <div className="otherInfo">
          <span>Ready In Minutes: {fullRecipe.readyInMinutes}min</span>
        </div>
        <h2>Summary</h2>
        <p>{fullRecipe.summary}</p>
      </article>
      <a href={fullRecipe.sourceUrl}>Read More about the recipe</a>
    </>
  );
};
