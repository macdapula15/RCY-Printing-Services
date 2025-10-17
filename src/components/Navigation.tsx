import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo/rcy_logo.png';

interface NavigationProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export default function Navigation({ currentPage, setCurrentPage }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = ['Home', 'Services', 'Gallery', 'Contact'];

  return (
    <nav className="bg-blue-600 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Clickable Logo and Title */}
          <button
            onClick={() => {
              setCurrentPage('Home');
              setIsMenuOpen(false);
            }}
            className="flex items-center space-x-2 focus:outline-none"
          >
            <img src={logo} alt="RCY Logo" className="w-10 h-10" />
            <span className="text-xl font-bold cursor-pointer">RCY PRINTING SERVICES</span>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => setCurrentPage(item)}
                className={`hover:text-yellow-400 transition ${
                  currentPage === item ? 'text-yellow-400 font-semibold' : ''
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => {
                  setCurrentPage(item);
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left py-2 hover:text-yellow-400 ${
                  currentPage === item ? 'text-yellow-400 font-semibold' : ''
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
