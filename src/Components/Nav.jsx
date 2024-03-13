import { headerLogo } from "../assets/images";
import { hamburger, hamburgerDark } from "../assets/icons";
import { navLinks } from "../constants";
import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

function Nav({ darkMode, onDarkMode }) {
  const [menu, setMenu] = useState(false);
  const location = useLocation();

  return (
    <header className="padding-x py-2 absolute w-full sticky top-0 z-20 bg-white dark:bg-slate-900">
      <nav className="flex justify-between items-center max-container">
        <NavLink to="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </NavLink>

        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:flex-col max-lg:gap-5 max-lg:hidden menu">
          {navLinks.map((link) => (
            <li key={link.label}>
              {(link.href === "#") & (location.pathname !== "/") ? (
                <NavLink
                  to={"/"}
                  className="font-montserrat leading-normal text-lg text-slate-gray dark:text-slate-50"
                >
                  {link.label}
                </NavLink>
              ) : (
                <a
                  href={link.href}
                  className="font-montserrat leading-normal text-lg text-slate-gray dark:text-slate-50"
                >
                  {link.label}
                </a>
              )}
            </li>
          ))}
          <li>
            <button
              onClick={() => {
                document.body.classList.toggle("dark");
                onDarkMode(!darkMode);
              }}
              className="text-slate-gray dark:text-slate-50 border-slate-gray border-2 p-1.5 bark:bg-slate-gray rounded-full"
            >
              {darkMode ? "good morning" : "good night"}
            </button>
          </li>
        </ul>
        <div className="hidden max-lg:block fixed right-5 top-5">
          <img
            src={!darkMode ? hamburger : hamburgerDark}
            alt="hamburger"
            width={25}
            height={25}
            onClick={() =>
              document.querySelector(".menu").classList.toggle("max-lg:hidden")
            }
          />
        </div>
      </nav>
    </header>
  );
}

export default Nav;
