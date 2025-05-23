import { useEffect, useState } from "react";
import { useRecipeStore } from "../store/useRecipeStore.js";

export const Search = () => {
  const [userFood, setUserFood] = useState("");

  const setFood = useRecipeStore((state) => state.setFood); // Set food variable in my store so I can acess userFood in other components
  const recipes = useRecipeStore((state) => state.recipes);
  const searchRecipe = useRecipeStore((state) => state.searchRecipe);

  const handleSearch = (e) => {
    e.preventDefault();
    if (userFood !== "") {
      searchRecipe(userFood);
      setFood(userFood);
      setUserFood("");
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
          value={userFood}
          onChange={(e) => {
            setUserFood(e.target.value);
          }}
        />
        <button type="submit">Search Recipe</button>
      </form>
    </>
  );
};
