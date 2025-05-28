import { useState } from "react";
import { MenuBar } from "../assets/svgs.jsx";
import { Link } from "react-router-dom";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="bg-orange">
      <nav className="container mx-auto flex items-center justify-between px-4 py-6">
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <MenuBar />
        </button>
        <p className="text-2xl text-dark">
          <strong className="font-bold">Recipe</strong> <span className="font-medium">finder</span>
        </p>
        {/* Desktop link */}
        <ul className="hidden items-center gap-8 md:flex">
          <li>
            <Link className="text-dark transition hover:text-white" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="text-dark transition hover:text-white" to="/shoppingList">
              Shopping List
            </Link>
          </li>
          <li>
            <Link className="text-dark transition hover:text-white" to="/favoriteRecipe">
              Favorite Recipe
            </Link>
          </li>
        </ul>
      </nav>
      {/* Mobile DropDown */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <ul className="flex flex-col items-center gap-4 p-4 pb-4">
          <li>
            <Link className="text-dark transition hover:text-white" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="text-dark transition hover:text-white" to="/shoppingList">
              Shopping List
            </Link>
          </li>
          <li>
            <Link className="text-dark transition hover:text-white" to="/favoriteRecipe">
              Favorite Recipe
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};
