import { useState } from "react";
import { MenuBar } from "../assets/svgs.jsx";

export const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header>
      <nav className="bg-orange py-6">
        <div className="container mx-auto flex flex-wrap items-center gap-14 px-4">
          <button onClick={() => setIsMenuOpen((prev) => !prev)}>
            <MenuBar />
          </button>
          <p className="text-2xl text-dark">
            <strong className="font-bold">Recipe</strong>{" "}
            <span className="font-medium">finder</span>
          </p>
        </div>
      </nav>
      <article className="bg-orange">
        <div className="container mx-auto px-4 py-5">
          <ul className="flex flex-col items-center gap-2 hidden">
            <li>
              <a
                className="text-blue-500 underline transition duration-200 hover:text-blue-800"
                href="#"
              >
                Shopping List
              </a>
            </li>
            <li>
              <a
                className="text-blue-500 underline transition duration-200 hover:text-blue-800"
                href="#"
              >
                Favorite Recipe
              </a>
            </li>
          </ul>
        </div>
      </article>
    </header>
  );
};
