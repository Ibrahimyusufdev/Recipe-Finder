import { GithubIcon } from "../assets/svgs.jsx";
export const Footer = () => {
  return (
    <footer className="mt-6 bg-[#E0E0E0] py-[4rem] px-0.[625rem]">
      <div className="container mx-auto px-4">
        <div className="h-[0.0625rem] max-w-[102.3125rem] bg-black"></div>
        <p className="flex flex-wrap items-center gap-3 justify-center text-center py-12">
          {" "}
          <span>&copy; Copyright 2025 - Developed By Ibrahim Yusuf</span>{" "}
          <a href="https://github.com/ibrahimyusufdev" target="_blank">
            <GithubIcon />
          </a>{" "}
        </p>
      </div>
    </footer>
  );
};
