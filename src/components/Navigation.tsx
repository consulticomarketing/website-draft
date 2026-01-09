import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Home', page: 'home' },
    { name: 'SEO', page: 'seo' },
    { name: 'Content Marketing', page: 'content' },
    { name: 'Paid Advertising', page: 'paid-ads' },
    { name: 'Contact', page: 'contact' },
  ];

  const handleNavigation = (page: string) => {
    onNavigate(page);
    setIsMenuOpen(false);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }, 125);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <button
            onClick={() => handleNavigation('home')}
            className="text-2xl font-bold text-[#007bff] hover:text-blue-700 transition-colors duration-200"
          >
            Consultico
          </button>

          <div className="hidden md:block">
            <div className="relative">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-[#007bff] transition-colors duration-200 font-medium"
              >
                Menu
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isMenuOpen ? 'rotate-180' : ''}`} />
              </button>

              {isMenuOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                  {menuItems.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => handleNavigation(item.page)}
                      className={`w-full text-left block px-4 py-3 transition-colors duration-150 ${
                        currentPage === item.page
                          ? 'bg-blue-50 text-[#007bff] font-medium'
                          : 'text-gray-700 hover:bg-gray-50 hover:text-[#007bff]'
                      }`}
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-[#007bff] transition-colors duration-200"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-2">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.page)}
                className={`w-full text-left block px-4 py-3 transition-colors duration-150 rounded-lg ${
                  currentPage === item.page
                    ? 'bg-blue-50 text-[#007bff] font-medium'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-[#007bff]'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
