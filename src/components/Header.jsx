import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useState, useRef, useEffect } from 'react';

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const languages = [
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
    { code: 'uk', label: 'Українська', flag: '🇺🇦' },
    { code: 'tr', label: 'Türkçe', flag: '🇹🇷' },
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
        <span className="text-xl">{current.flag}</span>
        <span>{current.label}</span>
        <svg className={`w-4 h-4 ml-2 transition-transform ${open ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
      </button>
      {open && (
        <div className="absolute z-20 mt-2 w-44 bg-white rounded-lg shadow-lg border border-gray-200 animate-fade-in">
          {languages.map(lang => (
            <button
              key={lang.code}
              onClick={() => { i18n.changeLanguage(lang.code); setOpen(false); }}
              className={`flex items-center gap-2 w-full text-left px-4 py-2 hover:bg-blue-50 focus:bg-blue-100 transition-colors ${i18n.language === lang.code ? 'font-bold text-blue-600 bg-blue-50' : ''}`}
            >
              <span className="text-xl">{lang.flag}</span>
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
  return (
    <header className="bg-gray-900 text-white py-4 px-6 flex flex-col md:flex-row md:items-center md:justify-between shadow">
      <div className="flex items-center gap-4 mb-2 md:mb-0">
        <h1 className="text-2xl font-bold tracking-tight">My Site Title</h1>
        <LanguageSwitcher />
      </div>
      <nav className="flex gap-6 text-lg">
        <Link to="/" className="hover:text-blue-400 transition-colors">{t('home')}</Link>
        <Link to="/about" className="hover:text-blue-400 transition-colors">{t('about')}</Link>
        <Link to="/contact" className="hover:text-blue-400 transition-colors">{t('contact')}</Link>
      </nav>
    </header>
  );
}

export default Header;