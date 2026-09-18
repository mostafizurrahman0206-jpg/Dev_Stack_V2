
const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12">

        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">

          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-4 flex items-center gap-2">

              <div className="flex h-5 w-5 items-center justify-center rounded-md bg-fuchsia-400 text-[10px] font-bold text-white">
                DS
              </div>

              <span className="text-sm font-semibold text-purple-600">
                Dev
              </span>

              <span className="text-sm font-semibold text-gray-800">
                Stack
              </span>

            </div>

            <p className="max-w-sm text-xs leading-5 text-gray-400">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>

            {/* Social Links */}
            <div className="mt-5 flex gap-5 text-xs font-medium text-gray-700">

              <a
                href="#"
                className="transition hover:text-purple-600"
              >
                GitHub
              </a>

              <a
                href="#"
                className="transition hover:text-purple-600"
              >
                Twitter
              </a>

              <a
                href="#"
                className="transition hover:text-purple-600"
              >
                LinkedIn
              </a>

            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="mb-4 text-[10px] font-bold tracking-wide text-gray-800">
              PRODUCT
            </h3>

            <ul className="space-y-3 text-xs text-gray-400">

              <li>
                <a href="#" className="hover:text-purple-600">
                  Home
                </a>
              </li>

              <li>
                <a href="#technologies" className="hover:text-purple-600">
                  Technologies
                </a>
              </li>

              <li>
                <a href="#projects" className="hover:text-purple-600">
                  Projects
                </a>
              </li>

            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 text-[10px] font-bold tracking-wide text-gray-800">
              COMPANY
            </h3>

            <ul className="space-y-3 text-xs text-gray-400">

              <li>
                <a href="#about" className="hover:text-purple-600">
                  About
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-purple-600">
                  Contact
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-purple-600">
                  Careers
                </a>
              </li>

            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-4 text-[10px] font-bold tracking-wide text-gray-800">
              LEGAL
            </h3>

            <ul className="space-y-3 text-xs text-gray-400">

              <li>
                <a href="#" className="hover:text-purple-600">
                  Privacy Policy
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-purple-600">
                  Terms of Service
                </a>
              </li>

            </ul>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="mt-12 flex flex-col gap-4 border-t border-gray-200 pt-6 text-[10px] text-gray-400 sm:flex-row sm:items-center sm:justify-between">

          <p>
            © 2026 Dev Stack. All rights reserved.
          </p>

          <div className="flex gap-6">

            <a href="#" className="hover:text-gray-700">
              Privacy
            </a>

            <a href="#" className="hover:text-gray-700">
              Terms
            </a>

          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
 
