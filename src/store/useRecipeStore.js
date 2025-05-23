import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import axios from "axios";

export const useRecipeStore = create(
  immer((set, get) => ({
    food: "",
    setFood: (userFood) => set((state) => {state.food = userFood}),
    recipes: [],
    fullRecipes: {},
    loading: false,
    error: null,
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
      });
    
      const apiKey = get().apiKey;
      const url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`;
      try {
        const response = await axios.get(url);
        console.log(response.data);
        set((state) => {
            state.fullRecipes = response.data ?? {};
            state.loading = false;
        })
      } catch (err) {
        set((state) => {
          state.error = err.message;
          state.loading = false;
        });
      }
    },
  }))
);
