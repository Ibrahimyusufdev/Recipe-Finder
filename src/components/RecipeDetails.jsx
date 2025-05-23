import { useRecipeStore } from "../store/useRecipeStore.js";

export const RecipeDetails = () => {
  const fullRecipe = useRecipeStore((state) => state.fullRecipe);
  const food = useRecipeStore((state) => state.food)

  return (
    <>
      <h1>Food Type: {food}</h1>
      <h3>Recipe Title: {fullRecipe.title}</h3>
      <img src={fullRecipe.image} alt={fullRecipe.title} />
      {fullRecipe.extendedIngredients.map((ingredient) => (
        <div key={ingredient.id}>
          <p>Ingredients</p>
          <li>{ingredient.original}</li>
        </div>
      ))}
    </>
  )

}