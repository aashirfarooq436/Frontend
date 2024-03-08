import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="text-white p-5">
      <div className="container mx-auto flex justify-between items-center sm:px-16">
        {/* Logo/Brand Name */}
        <NavLink to="/" className="sm:text-4xl font-bold tracking-widest">
          ENVIROWATCH
        </NavLink>
        {/* Navigation Links */}
        <nav className="space-x-4 text-xl">
          <NavLink to="/" className="hover:text-gray-300">
            HOME
          </NavLink>
          <NavLink to="/about" className="hover:text-gray-300">
            ABOUT
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
