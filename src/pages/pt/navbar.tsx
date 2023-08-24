import Image from "next/image";
import { useState } from "react";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Home from "./home";

const Navbar: React.FC = () => {
  const [select, setSelect] = useState("home");

  const handleHome = () => {
    setSelect("home");
  };

  const handleAboutMe = () => {
    setSelect("about");
  };

  const handleProjects = () => {
    setSelect("projects");
  };

  return (
    <div className="grid item-center pb-10">
      <nav className="flex flex-row justify-center w-full pl-20 text-5xl pb-20">
        <div>
          <button
            className={`flex gap-10 p-9 text-green-700 hover:text-red-500  ${
              select === "home" ? "text-yellow-500" : ""
            }`}
            style={{
              ...(select === "home" && { textShadow: "10px 10px 20px cyan" }),
            }}
            onClick={handleHome}
          >
            Home
          </button>
        </div>
        <div>
          <button
            className={`flex gap-10 p-9 text-green-700 hover:text-red-500  ${
              select === "about" ? "text-yellow-500" : ""
            }`}
            style={{
              ...(select === "about" && { textShadow: "10px 10px 20px cyan" }),
            }}
            onClick={handleAboutMe}
          >
            Sobre Mim
          </button>
        </div>
        <div>
          <button
            className={`flex gap-10 p-9 text-green-700 hover:text-red-500  ${
              select === "projects" ? "text-yellow-500" : ""
            }`}
            style={{
              ...(select === "projects" && {
                textShadow: "10px 10px 20px cyan",
              }),
            }}
            onClick={handleProjects}
          >
            Projectos
          </button>
        </div>
        <div></div>
      </nav>
      {select === "home" && <Home />}
      {select === "about" && <AboutMe />}
      {select === "projects" && <Projects />}
    </div>
  );
};

export default Navbar;
