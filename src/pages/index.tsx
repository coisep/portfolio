import React, { useState } from "react";
import Navbar from "./pt/navbar";
import NavbarEn from "./en/navbarEN";
import NavbarFR from "./fr/navbarFR";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [select, setSelect] = useState<string>("pt");
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const languageOptions = [
    { value: "pt", imageSrc: "/pt.png" },
    { value: "en", imageSrc: "/gb.png" },
    { value: "fr", imageSrc: "/fr.png" },
  ];

  const handleLanguageChange = (value: string) => {
    setSelect(value);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>
      <div className=" justify-center lg:top-10 right-10">
        <nav className="sticky bottom-0  justify-center">
          <div className="nav">
            <div className="dropdown">
              <button
                onClick={toggleDropdown}
                className="flex items-center justify-center w-full py-2 pl-3 pr-4 border-b border-gray-100 hover:bg-gray-50 "
              >
                <Image
                  src={
                    languageOptions.find((option) => option.value === select)
                      ?.imageSrc || ""
                  }
                  alt={select}
                  width={45}
                  height={45}
                  
                />
              </button>
              {isDropdownOpen && (
                <div id="dropdownNavbar" className="z-10 divide-y flex justify-center">
                  <ul className="py-2" aria-labelledby="dropdownLargeButton" >
                    <li>
                      <Link
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        onClick={() => handleLanguageChange("pt")}
                      >
                        <Image src="/pt.png" width={45} height={45} alt="pt" />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        onClick={() => handleLanguageChange("en")}
                      >
                        <Image src="/gb.png" width={45} height={45} alt="en" />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        onClick={() => handleLanguageChange("fr")}
                      >
                        <Image src="/fr.png" width={45} height={45} alt="fr" />
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </nav>
      </div>
      <div>
        {select === "pt" && <Navbar />}
        {select === "en" && <NavbarEn />}
        {select === "fr" && <NavbarFR />}
      </div>
    </div>
  );
}
