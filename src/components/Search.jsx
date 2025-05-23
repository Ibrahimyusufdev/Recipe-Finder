import { useEffect, useState } from "react";
import { useRecipeStore } from "../store/useRecipeStore.js";

export const Search = () => {
  const [food, setFood] = useState("");

  const recipes = useRecipeStore((state) => state.recipes);
  const searchRecipe = useRecipeStore((state) => state.searchRecipe);
  const displayFullRecipes = useRecipeStore((state) => state.displayFullRecipes);
  const loading = useRecipeStore((state) => state.loading);
  const error = useRecipeStore((state) => state.error);

  

  const handleSearch = (e) => {
    e.preventDefault();
    if (food !== "") {
      searchRecipe(food);
      console.log(recipes);
    }
  };

  useEffect(() => {
    console.log(recipes);
  }, [recipes]);

  return (
    <>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={food}
          onChange={(e) => {
            setFood(e.target.value);
          }}
        />
        <button type="submit">Search Recipe</button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <p>Food type: {food}</p>
          <p>Recipe Title: {recipe.title}</p>
          <img src={recipe.image} alt={recipe.title} width={50} />
          <button onClick={() => displayFullRecipes(recipe.id)}>View Full Details</button>
        </div>
      ))}

      <button onClick={displayFullRecipes}>Dispalay Full Recipe</button>
    </>
  );
};
