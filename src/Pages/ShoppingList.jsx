import { useRecipeStore } from "../store/useRecipeStore.js";
import { BackIcon } from "../assets/svgs.jsx";
import { Link } from "react-router-dom";
export const ShoppingList = () => {
  const shoppingList = useRecipeStore((state) => state.shoppingList);

  return (
    <>
      <section>
        <div className="container mx-auto px-4">
          <Link className="mt-5" to="/">
            <BackIcon />
          </Link>

          <ul className="mt-5">
            <h1>Ingredients To Buy</h1>
            <ul>
              {shoppingList.length > 0 ? (
                shoppingList.map((list) => <li key={list.id}>{list.original}</li>)
              ) : (
                <p className="text-red-400">No Ingredient Found</p>
              )}
            </ul>
          </ul>
        </div>
      </section>
    </>
  );
};
