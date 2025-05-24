import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { persist } from "zustand/middleware";
import axios from "axios";

export const useRecipeStore = create(persist(
  immer((set, get) => ({
    food: "",
    setFood: (userInput) => set((state) => {state.food = userInput}),
    recipes: [],
    fullRecipe: {},
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
        state.fullRecipe = {}
      });
    
      const apiKey = get().apiKey;
      const url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`;
      try {
        const response = await axios.get(url);
        const data = response?.data;
        if(!data || Object.keys(data).length === 0) {
          throw new Error("No recipe details found");
        }
        console.log(response.data);
        set((state) => {
            state.fullRecipe = data;
            state.loading = false;
        })
      } catch (err) {
        set((state) => {
          state.error = err.message || "Something went wrong";
          state.loading = false;
        });
      }
    },
    
  }))
));
