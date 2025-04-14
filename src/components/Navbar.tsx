import { useState, useEffect, useRef, MouseEvent } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isResearchDropdownOpen, setIsResearchDropdownOpen] = useState(false);
  const [isMobileResearchDropdownOpen, setIsMobileResearchDropdownOpen] =
    useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | any) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsResearchDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside as EventListener);
    return () =>
      document.removeEventListener(
        "mousedown",
        handleClickOutside as EventListener
      );
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Reset dropdown state when toggling mobile menu
    setIsMobileResearchDropdownOpen(false);
  };

  const toggleResearchDropdown = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsResearchDropdownOpen(!isResearchDropdownOpen);
  };

  const toggleMobileResearchDropdown = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsMobileResearchDropdownOpen(!isMobileResearchDropdownOpen);
  };

  const researchSubItems = [
    { name: "Projects", path: "/research/projects" },
    { name: "Team", path: "/research/team" },
    { name: "Collaborators", path: "/research/collaborations" },
  ];

  interface NavItem {
    name: string;
    path: string;
    hasDropdown?: boolean;
    subItems?: { name: string; path: string }[];
  }

  const navItems: NavItem[] = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    {
      name: "Research",
      path: "/research",
      hasDropdown: true,
      subItems: researchSubItems,
    },
    { name: "Publications", path: "/publication" },
    { name: "Media", path: "/media" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-gray-100 py-4"
      }`}
    >
      <div className="w-full px-6 md:px-12 lg:px-16 xl:px-24 ">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 text-center">
            <img
              src="https://res.cloudinary.com/dq1llsy7f/image/upload/v1743854402/oymhfzlxj8k6glofetpn.jpg"
              alt="GEAR - Geo-Action Research"
              className="h-20 max-h-full"
            />
            <span className="text-2xl md:text-lg font-bold text-blue-700 flex items-center">
              Dr. Somnath Ghosal
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 lg:space-x-12">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative flex items-center"
                ref={item.hasDropdown ? dropdownRef : null}
              >
                {item.hasDropdown ? (
                  <div className="flex items-center">
                    <Link
                      to={item.path}
                      className="text-blue-700 hover:text-blue-800 transition-colors duration-200 font-medium py-2 px-3 hover:bg-blue-50 rounded"
                    >
                      {item.name}
                    </Link>
                    <button
                      onClick={toggleResearchDropdown}
                      className="text-blue-700 hover:text-blue-800 ml-1 p-1 hover:bg-blue-50 rounded-full focus:outline-none"
                      aria-expanded={isResearchDropdownOpen}
                      aria-haspopup="true"
                      aria-label="Toggle research dropdown"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-4 w-4 transition-transform ${
                          isResearchDropdownOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {isResearchDropdownOpen && item.subItems && (
                      <div className="absolute top-full left-0 mt-1 bg-white shadow-lg rounded-md overflow-hidden w-48 z-20">
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            className="block px-4 py-3 text-blue-700 hover:bg-blue-50 font-medium"
                            onClick={() => setIsResearchDropdownOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className="text-blue-700 hover:text-blue-800 transition-colors duration-200 font-medium py-2 px-3 hover:bg-blue-50 rounded"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className="text-gray-700 p-2 rounded-md hover:bg-blue-50"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 bg-white shadow-lg rounded-md py-2 animate-fadeIn">
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div className="flex items-center justify-between px-4 py-3">
                    <Link
                      to={item.path}
                      className="text-blue-700 hover:text-blue-800 font-medium"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                    <button
                      onClick={toggleMobileResearchDropdown}
                      className="text-blue-700 hover:bg-blue-50 p-1 rounded-full focus:outline-none"
                      aria-expanded={isMobileResearchDropdownOpen}
                      aria-label="Toggle research dropdown"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-4 w-4 transition-transform ${
                          isMobileResearchDropdownOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className="block px-4 py-3 text-blue-700 hover:bg-blue-50 font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}

                {/* Mobile Dropdown Items */}
                {item.hasDropdown &&
                  isMobileResearchDropdownOpen &&
                  item.subItems && (
                    <div className="bg-blue-50">
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          className="block px-8 py-3 text-blue-700 hover:bg-blue-100 font-medium"
                          onClick={() => {
                            setIsMobileMenuOpen(false);
                          }}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
