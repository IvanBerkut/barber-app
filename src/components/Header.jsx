import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useState, useRef, useEffect } from 'react';

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const languages = [
    { code: 'en', label: 'English' },
    { code: 'de', label: 'Deutsch' },
    { code: 'uk', label: 'Українська' },
    { code: 'tr', label: 'Türkçe' },
  ];
  const current = languages.find(l => l.code === i18n.language) || languages[0];

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [open]);

  return (
    <div ref={dropdownRef} className="relative inline-block text-left mb-4">
      <button
        className="flex items-center gap-2 px-4 py-2 bg-white text-gray-800 rounded-lg shadow border border-gray-300 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
        onClick={() => setOpen(o => !o)}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span>{current.label}</span>
        <svg className={`w-4 h-4 ml-2 transition-transform ${open ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
      </button>
      {open && (
        <div className="absolute z-20 mt-2 w-44 bg-white rounded-lg shadow-lg border border-gray-200 animate-fade-in overflow-hidden left-1/2 -translate-x-1/2 md:left-auto md:right-0 md:translate-x-0">
          {languages.map(lang => (
            <button
              key={lang.code}
              onClick={() => { i18n.changeLanguage(lang.code); setOpen(false); }}
              className={`flex items-center text-gray-700 gap-2 w-full text-left px-4 py-2 hover:bg-blue-50 focus:bg-blue-100 transition-colors ${i18n.language === lang.code ? 'font-bold text-blue-600 bg-blue-50' : ''}`}
            >
              <span>{lang.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function Header() {
  const { t } = useTranslation();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  // Disable background scroll and trap focus when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <header className="bg-white-900 text-gray py-4 px-6 flex flex-col md:flex-row md:items-center md:justify-between shadow">
      <div className="flex items-center justify-between gap-4 mb-2 md:mb-0">
        {location.pathname === '/' ? (
          <img src="/src/assets/logo-text.svg" alt="Logo" className="h-10 w-auto" />
        ) : (
          <Link to="/">
            <img src="/src/assets/logo-text.svg" alt="Logo" className="h-10 w-auto" />
          </Link>
        )}
        {/* Burger button for small screens */}
        <button
          className="md:hidden ml-4 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      {/* Fullscreen mobile menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white bg-opacity-95 md:hidden transition-all">
          <nav className="flex flex-col gap-8 text-2xl items-center">
            <Link to="/" className="hover:text-blue-400 transition-colors" onClick={() => setMenuOpen(false)}>{t('home')}</Link>
            <Link to="/about" className="hover:text-blue-400 transition-colors" onClick={() => setMenuOpen(false)}>{t('about')}</Link>
            <Link to="/contact" className="hover:text-blue-400 transition-colors" onClick={() => setMenuOpen(false)}>{t('contact')}</Link>
            <div className="mt-8"><LanguageSwitcher /></div>
          </nav>
          <button
            className="absolute top-6 right-6 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}
      {/* Desktop navigation and language switcher */}
      <nav
        className={`gap-6 text-lg hidden md:flex md:items-center md:static md:bg-transparent md:shadow-none md:z-auto md:px-0 md:py-0`}
      >
        <Link to="/" className="hover:text-blue-400 transition-colors">{t('home')}</Link>
        <Link to="/about" className="hover:text-blue-400 transition-colors">{t('about')}</Link>
        <Link to="/contact" className="hover:text-blue-400 transition-colors">{t('contact')}</Link>
      </nav>
      <div className="hidden md:block"><LanguageSwitcher /></div>
    </header>
  );
}

export default Header;