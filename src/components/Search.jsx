import { useState } from "react";
import { useRecipeStore } from "../store/useRecipeStore.js";

export const Search = () => {
  const [food, setFood] = useState("");

  const recipes = useRecipeStore((state) => state.recipes);
  const searchRecipe = useRecipeStore((state) => state.searchRecipe);

  const handleSearch = (e) => {
    e.preventDefault()
    if(food !== "") {
        searchRecipe(food);
        console.log(recipes);
    }
  }
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
      </form>
    </>
  );
};
