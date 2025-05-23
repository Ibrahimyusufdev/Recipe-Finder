import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import axios from "axios";

export const useRecipeStore = create(
  immer((set) => ({
    recipes: [],
    loading: false,
    error: null,
    searchRecipe: async (food) => {
        set((state) => {
            state.loading = true;
            state.error = null;
            state.recipes = [];
        })
      const apiKey = import.meta.env.VITE_API_KEY;
      const url = `https://api.spoonacular.com/recipes/complexSearch?query=${food}&number=5&apiKey=${apiKey}`;

      try {
        const response = await axios.get(url);
        console.log(response);
        
        set((state) => {
            state.recipes = response.data.results;
            state.loading = false;
            if (state.recipes.length === 0) throw new Error("Recipe Not Found")
        })
      } catch (err) {
        set((state) => {
            state.error = err.message;
            state.loading = false;
        })
        console.log(err.message);
      }
    },
  }))
);
