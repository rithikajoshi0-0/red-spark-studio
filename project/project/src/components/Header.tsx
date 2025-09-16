import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-hero-gradient rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <span className="text-xl font-bold text-foreground">ServiceHub</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="nav-link text-foreground hover:text-primary">Home</a>
            <a href="#services" className="nav-link text-foreground hover:text-primary">Services</a>
            <a href="#portfolio" className="nav-link text-foreground hover:text-primary">Portfolio</a>
            <a href="#about" className="nav-link text-foreground hover:text-primary">About</a>
            <a href="#blog" className="nav-link text-foreground hover:text-primary">Blog</a>
            <a href="#contact" className="nav-link text-foreground hover:text-primary">Contact</a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="btn-hero px-6 py-2 rounded-lg font-medium">
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden p-2 text-foreground hover:text-primary"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-foreground hover:text-primary" onClick={toggleMenu}>Home</a>
              <a href="#services" className="text-foreground hover:text-primary" onClick={toggleMenu}>Services</a>
              <a href="#portfolio" className="text-foreground hover:text-primary" onClick={toggleMenu}>Portfolio</a>
              <a href="#about" className="text-foreground hover:text-primary" onClick={toggleMenu}>About</a>
              <a href="#blog" className="text-foreground hover:text-primary" onClick={toggleMenu}>Blog</a>
              <a href="#contact" className="text-foreground hover:text-primary" onClick={toggleMenu}>Contact</a>
              <Button className="btn-hero w-full mt-4">Get Quote</Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;