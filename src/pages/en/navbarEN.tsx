import Image from "next/image";
import { useState } from "react";
import AboutMeEN from "./AboutMeEN";
import ProjectsEN from "./ProjectsEn";
import HomeEN from "./HomeEn";


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
            About Me
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
            Projects
          </button>
        </div>

      </nav>
      {select === "home" && <HomeEN />}
      {select === "about" && <AboutMeEN />}
      {select === "projects" && <ProjectsEN />}
    </div>
  );
};

export default Navbar;
