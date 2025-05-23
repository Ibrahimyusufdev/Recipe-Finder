import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import axios from "axios";

export const useRecipeStore = create(
  immer((set) => ({
    recipes: [],
    loading: false,
    error: null,
    searchRecipe: async (food) => {
      const apiKey = import.meta.env.VITE_API_KEY;
      const url = `https://api.spoonacular.com/recipes/complexSearch?query=${food}&number=10&apiKey=${apiKey}`;

      try {
        const response = await fetch(url);
        const jsonResponse = await response.json();
        console.log(jsonResponse);

        set((state) => {
          state.recipes.push(jsonResponse);
        });
      } catch (err) {
        console.log(err.message);
      }
    },
  }))
);
