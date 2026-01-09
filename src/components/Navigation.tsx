import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Home', page: 'home' },
    { name: 'Think-First', page: 'think-first-programme' },
    { name: 'SEO', page: 'seo' },
    { name: 'Content Marketing', page: 'content' },
    { name: 'Paid Advertising', page: 'paid-ads' },
  ];

  const handleNavigation = (page: string) => {
    onNavigate(page);
    setIsMenuOpen(false);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }, 125);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-5">
        <div className="flex justify-between items-center">
          <button
            onClick={() => handleNavigation('home')}
            className="text-2xl font-bold text-[#007bff] hover:text-blue-700 transition-colors duration-200"
          >
            Consultico
          </button>

          <div className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.page)}
                className={`text-sm uppercase tracking-wide transition-colors duration-200 ${
                  item.page === 'think-first-programme' ? 'font-semibold' : 'font-medium'
                } ${
                  currentPage === item.page
                    ? 'text-[#007bff]'
                    : 'text-gray-600 hover:text-[#007bff]'
                }`}
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => handleNavigation('contact')}
              className="px-6 py-2.5 bg-white text-gray-800 font-medium text-sm uppercase tracking-wide border-2 border-gray-800 rounded-full hover:bg-gray-800 hover:text-white transition-all duration-200"
            >
              Contact
            </button>
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-[#007bff] transition-colors duration-200"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-2">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.page)}
                className={`w-full text-left block px-4 py-3 transition-colors duration-150 rounded-lg text-sm uppercase tracking-wide ${
                  item.page === 'think-first-programme' ? 'font-semibold' : 'font-medium'
                } ${
                  currentPage === item.page
                    ? 'bg-blue-50 text-[#007bff]'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-[#007bff]'
                }`}
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => handleNavigation('contact')}
              className="w-full mt-2 px-4 py-3 bg-gray-800 text-white font-medium text-sm uppercase tracking-wide rounded-lg hover:bg-gray-700 transition-colors duration-200"
            >
              Contact
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
