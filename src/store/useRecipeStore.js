import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { persist } from "zustand/middleware";
import axios from "axios";

export const useRecipeStore = create(
  persist(
    immer((set, get) => ({
      loading: false,
      error: null,
      food: "",
      setFood: (userInput) =>
        set((state) => {
          state.food = userInput;
        }),
      recipes: [],
      fullRecipe: {},
      favoriteRecipe: [],
      setFavoriteRecipe: (recipe) =>
        set((state) => {
          const alreadyExists = state.favoriteRecipe.some(
            (item) => item.id === recipe.id
          );
          if (!alreadyExists) {
            state.favoriteRecipe.push(recipe);
            state.error = null;
          } else {
            state.error = "Already added to favorite";
          }
        }),
      shoppingList: [],
      setShoppingList: (ingredient) =>
        set((state) => {
          const alreadyExists = state.shoppingList.some(
            (item) => item.id === ingredient.id
          );
          if (!alreadyExists) {
            state.shoppingList.push(ingredient);
            state.error = null;
          } else {
            state.error = "Already added to shopping list";
          }
        }),
      apiKey: import.meta.env.VITE_API_KEY,
      searchRecipe: async (userFood) => {
        set((state) => {
          state.loading = true;
          state.error = null;
          state.recipes = [];
        });
        const apiKey = get().apiKey;
        const url = `https://api.spoonacular.com/recipes/complexSearch?query=${userFood}&number=5&apiKey=${apiKey}`;

        try {
          const response = await axios.get(url);
          console.log(response);

          set((state) => {
            state.recipes = response.data.results ?? [];
            state.loading = false;
            if (state.recipes.length === 0) throw new Error("Recipe Not Found");
          });
        } catch (err) {
          set((state) => {
            state.error = err.message;
            state.loading = false;
          });
          console.log(err.message);
        }
      },

      displayFullRecipes: async (id) => {
        set((state) => {
          state.loading = true;
          state.error = null;
          state.fullRecipe = {};
        });

        const apiKey = get().apiKey;
        const url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`;
        try {
          const response = await axios.get(url);
          const data = response?.data;
          if (!data || Object.keys(data).length === 0) {
            throw new Error("No recipe details found");
          }
          console.log(response.data);
          set((state) => {
            state.fullRecipe = data;
            state.loading = false;
          });
        } catch (err) {
          set((state) => {
            state.error = err.message || "Something went wrong";
            state.loading = false;
          });
        }
      },
    })),
    {
      name: "recipe-storage",
      partialize: (state) => ({
        fullRecipe: state.fullRecipe,
        recipes: state.recipes,
        food: state.food,
        favoriteRecipe: state.favoriteRecipe,
        shoppingList: state.shoppingList,
      }),
    }
  )
);
