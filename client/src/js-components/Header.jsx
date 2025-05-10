import React, { useState, useEffect } from "react";
import { Button } from "../components/ui/button";
// import LogoSVG from "./LogoSVG.jsx";

import LogoSVG1 from "../../src/assets/images/Brillaris-Logo.png";
import { AlignJustify, X, Moon, Sun } from "lucide-react";
import { scrollToElement } from "../lib/utils.js";
import { useTheme } from "../components/ui/theme-provider.jsx";

const navItems = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "OurSolution", id: "services" },
  { name: "Services", id: "newservices" },
  { name: "Who We Are", id: "team" },
  { name: "Contact", id: "contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavClick = (id) => {
    scrollToElement(id);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header 
      className={`sticky top-0 z-50 backdrop-blur-sm transition-all duration-300 
        ${scrolled 
          ? "bg-white/90 dark:bg-accent/90 shadow-md py-2" 
          : "bg-white/80 dark:bg-accent/80 py-4"
        }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* <a href="#home" onClick={() => handleNavClick("home")} className="flex items-center">
            <LogoSVG className="h-12" />
          </a> */}
          <a href="#home" onClick={() => handleNavClick("home")} className="flex items-center">
            <img src={LogoSVG1} alt="Logo" className="h-20" />
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id);
                }}
                className="nav-link font-medium text-primary dark:text-white hover:text-secondary dark:hover:text-secondary transition-colors"
              >
                {item.name}
              </a>
            ))}
            
            {/* Theme Toggle */}
            {/* <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="rounded-full bg-gray-100 dark:bg-gray-800 h-8 w-8 shadow-sm"
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4 text-secondary" />
              ) : (
                <Moon className="h-4 w-4 text-accent" />
              )}
              <span className="sr-only">Toggle theme</span>
            </Button> */}
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="rounded-full bg-gray-100 dark:bg-gray-800 h-8 w-8 shadow-sm"
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4 text-secondary" />
              ) : (
                <Moon className="h-4 w-4 text-accent" />
              )}
              <span className="sr-only">Toggle theme</span>
            </Button>
          
            <Button
              variant="ghost"
              size="icon"
              className="text-primary dark:text-white"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <AlignJustify className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pt-4 pb-2">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.id);
                  }}
                  className="py-2 text-primary dark:text-white hover:text-secondary dark:hover:text-secondary transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;