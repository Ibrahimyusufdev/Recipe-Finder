import { useEffect, useState } from "react";
import { useRecipeStore } from "../store/useRecipeStore.js";
import { MenuBar } from "../assets/svgs.jsx";
import { SearchIcon } from "../assets/svgs.jsx";
import { Toaster, toast } from "react-hot-toast";

export const Search = () => {
  const [input, setInput] = useState("");

  const setFood = useRecipeStore((state) => state.setFood); // Set food variable in my store so I can acess input in other components
  const recipes = useRecipeStore((state) => state.recipes);
  const searchRecipe = useRecipeStore((state) => state.searchRecipe);

  const handleSearch = (e) => {
    e.preventDefault();
    if (input !== "") {
      searchRecipe(input);
      setFood(input);
      setInput("");
      console.log(recipes);
    }
  };

  useEffect(() => {
    console.log(recipes);
  }, [recipes]);

  return (
    <>
      <section className="bg-orange py-8">
        <Toaster position="top-right" />
        <div className="container mx-auto px-4">
          <form
            className="mt-6 flex sm:max-w-[40rem]  flex-wrap items-center gap-4 rounded-md bg-white p-2"
            onSubmit={handleSearch}
          >
            <SearchIcon className="flex-1" />
            <input
              className="flex-1 bg-none p-1 text-base outline-none"
              placeholder="Search recipes"
              type="text"
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
              }}
            />
          </form>
        </div>
      </section>
    </>
  );
};
