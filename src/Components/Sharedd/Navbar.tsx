 import logo from "../../assets/logo-text.png";

const Navbar = () => {
  return (
    <nav className="fixed left-0 top-0 z-50 w-full bg-white border-b border-gray-100">
      <div className="container mx-auto flex h-20 items-center justify-between px-6">

        {/* Logo */}
        <div>
          <a href="#" className="flex items-center">
            <img
              className="h-9 w-auto"
              src={logo}
              alt="Dev Stack Logo"
            />
          </a>
        </div>

        {/* Navigation Links */}
        <ul className="hidden items-center justify-center gap-8 text-base font-medium md:flex">
          <li>
            <a
              href="#"
              className="text-[#E91E63] font-semibold transition"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#technologies"
              className="text-gray-600 transition hover:text-[#E91E63]"
            >
              Technologies
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className="text-gray-600 transition hover:text-[#E91E63]"
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#about"
              className="text-gray-600 transition hover:text-[#E91E63]"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="text-gray-600 transition hover:text-[#E91E63]"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Sign In & Sign Up Buttons */}
        <div className="flex items-center gap-6">
          <a
            href="#signin"
            className="text-base font-medium text-gray-700 transition hover:text-[#E91E63]"
          >
            Sign In
          </a>
          <a
            href="#signup"
            className="rounded-full bg-[#E91E63] px-6 py-2 text-base font-medium text-white transition hover:bg-[#d81b60] shadow-sm"
          >
            Sign Up
          </a>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;