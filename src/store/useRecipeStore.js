import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import axios from "axios";

const useRecipeStore = create(immer((set) => ({
    recipes: [],
    loading: false,
    error: null,
    searchRecipe: (food) => {
        const apiKey = import.meta.env.VITE_API_KEY;
    }
})))
