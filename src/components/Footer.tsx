import { Facebook, Instagram, Mail, Phone, MapPin, ChevronRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', page: 'home' },
    { name: 'Think-First Programme', page: 'think-first-programme' },
    { name: 'SEO Services', page: 'seo' },
    { name: 'Content Marketing', page: 'content' },
    { name: 'Paid Advertising', page: 'paid-ads' },
    { name: 'Contact Us', page: 'contact' },
  ];

  const handleNavigation = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 bg-[#1e3a5f] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-[#007bff]">Consultico</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Strategic digital marketing solutions that drive real results. We help businesses grow through data-driven strategies and expert execution.
            </p>
            <div className="flex gap-3 pt-2">
              <a
                href="https://www.facebook.com/p/Consultico-61562303216944/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#007bff] transition-all duration-200 group"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://www.instagram.com/consultico_marketing/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#007bff] transition-all duration-200 group"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.page}>
                  <button
                    onClick={() => handleNavigation(link.page)}
                    className="text-gray-300 text-sm hover:text-[#007bff] transition-colors duration-200 flex items-center gap-1 group"
                  >
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:email@consultico.co.uk"
                  className="text-gray-300 text-sm hover:text-[#007bff] transition-colors duration-200 flex items-center gap-2 group"
                >
                  <Mail className="w-4 h-4 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span>email@consultico.co.uk</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:01414591351"
                  className="text-gray-300 text-sm hover:text-[#007bff] transition-colors duration-200 flex items-center gap-2 group"
                >
                  <Phone className="w-4 h-4 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span>0141 459 1351</span>
                </a>
              </li>
              <li className="flex items-start gap-2 text-gray-300 text-sm">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>Glasgow, Scotland<br />United Kingdom</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Stay Connected</h4>
            <p className="text-gray-300 text-sm">
              Follow us on social media for the latest updates, insights, and marketing tips.
            </p>
            <div className="pt-2">
              <button
                onClick={() => handleNavigation('contact')}
                className="px-6 py-2.5 bg-[#007bff] text-white font-medium text-sm uppercase tracking-wide rounded-full hover:bg-blue-600 transition-all duration-200 hover:shadow-lg"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Consultico. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <button
                onClick={() => handleNavigation('privacy')}
                className="text-gray-400 text-sm hover:text-[#007bff] transition-colors duration-200"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => handleNavigation('terms')}
                className="text-gray-400 text-sm hover:text-[#007bff] transition-colors duration-200"
              >
                Terms & Conditions
              </button>
              <button
                onClick={() => handleNavigation('cookies')}
                className="text-gray-400 text-sm hover:text-[#007bff] transition-colors duration-200"
              >
                Cookie Policy
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
