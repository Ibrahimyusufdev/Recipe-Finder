import { create } from "zustand";

export const useDefaultStore = create(() => ({
  defaultRecipe: [
    {
      id: 635675,
      title: "Boozy Bbq Chicken",
      image: "https://img.spoonacular.com/recipes/635675-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 660185,
      title: "Singapore Curry",
      image: "https://img.spoonacular.com/recipes/660185-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 661427,
      title: "Spring Risotto with Shrimp, Asparagus and Artichoke Hearts",
      image: "https://img.spoonacular.com/recipes/661427-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 655524,
      title: "Pecan Rice Pilaf",
      image: "https://img.spoonacular.com/recipes/655524-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 644627,
      title: "Ginger Sesame Dressing",
      image: "https://img.spoonacular.com/recipes/644627-312x231.jpg",
      imageType: "jpg",
    },
  ],
}));
