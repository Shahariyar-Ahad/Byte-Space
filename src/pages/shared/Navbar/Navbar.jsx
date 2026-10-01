import "react";
import Logo from "../../../Components/Logo/Logo";

import { MdOutlineShoppingBag } from "react-icons/md";
import { NavLink } from "react-router";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
  <NavLink to="/">Home</NavLink>
</li>

<li>
  <NavLink to="/courses">Courses</NavLink>
</li>

<li>
  <NavLink to="/creators">Creators</NavLink>
</li>
    </>
  );

  return (
    <div className="bg-grid-blue relative z-50 w-full overflow-hidden text-white">

      {/* Navbar */}
      <div className="navbar mx-auto h-[120px] min-h-0 w-full max-w-[1440px] p-0">

        {/* Left / Logo */}
        <div className="navbar-start">

          {/* Mobile menu */}
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost ml-2 lg:hidden"
            >
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 text-base-content rounded-box z-10 mt-3 w-52 p-2 shadow"
            >
              {navLinks}

              <li>
                <a>Sign In</a>
              </li>

              <li>
                <a>Join Us</a>
              </li>
            </ul>
          </div>

          {/* Logo */}
          <div className="ml-4 flex items-center gap-2 lg:ml-[122px]">
            <Logo />

            <h2 className="font-clash text-[24px] font-bold leading-[100%]">
              ByteSpace
            </h2>
          </div>
        </div>

        {/* Center navigation */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal items-center gap-6 p-0 text-[16px] [&_a]:p-0">
            {navLinks}
          </ul>
        </div>

        {/* Right side */}
        <div className="navbar-end gap-6 pr-4 text-[16px] lg:pr-[120px]">
          <a href="/login" className="hidden sm:block">Sign In</a>

          <a href="/register" className="hidden sm:block">Join Us</a>

          <button type="button" aria-label="Cart">
            <MdOutlineShoppingBag className="text-3xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;