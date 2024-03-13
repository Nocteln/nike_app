import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";

function Nav() {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="font-montserrat leading-normal text-lg text-slate-gray dark:text-slate-50"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <button
              onClick={() => {
                document.body.classList.toggle("dark");
              }}
              className="text-slate-gray dark:text-slate-50 border-slate-gray border-2 p-1.5 bark:bg-slate-gray rounded-full"
            >
              toggle Dark Mode
            </button>
          </li>
        </ul>
        <div className="hidden max-lg:block">
          <img src={hamburger} alt="hamburger" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
}

export default Nav;
