import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { persist } from "zustand/middleware";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";

export const useRecipeStore = create(
  persist(
    immer((set, get) => ({
      loading: false,
      error: null,
      apiKey: import.meta.env.VITE_API_KEY,
      food: "",
      setFood: (userInput) =>
        set((state) => {
          state.food = userInput;
        }),
      recipes: [],

      favoriteRecipe: [],
      setFavoriteRecipe: (recipe) => {
        const alreadyExists = get().favoriteRecipe.some((item) => item.id === recipe.id);
        if (alreadyExists) {
          toast.error("Already added to favorite");
          return;
        }
        set((state) => {
          state.favoriteRecipe.push(recipe);
        });
        toast.success("Added to favorite");
      },

      shoppingList: [],
      setShoppingList: (ingredient) => {
        const alreadyExists = get().shoppingList.some(
          (item) => item.id === ingredient.id || item.original === ingredient.original
        );
        if (alreadyExists) {
          toast.error("Already added to shopping List");
          return;
        }

        set((state) => {
          state.shoppingList.push(ingredient);
        });
        toast.success("Added to shopping List");
      },

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
      

          // set fetched data to my local recipe array & set loading to false
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
          toast.error(err.message);
        }
      },
      fullRecipe: {},
      setFullRecipe: (recipe) => {
        set((state) => state.fullRecipe = recipe)
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

          // set fetched data to my local fullRecipe object & set loading to false
          set((state) => {
            state.fullRecipe = data;
            state.loading = false;
          });
        } catch (err) {
          set((state) => {
            state.error = err.message ?? "Something went wrong";
            state.loading = false;
          });

          toast.error(err.message || "Something went wrong");
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
