import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  return (
    <div style={{ marginBottom: '1em' }}>
      <button onClick={() => i18n.changeLanguage('en')}>EN</button>
      <button onClick={() => i18n.changeLanguage('de')}>DE</button>
      <button onClick={() => i18n.changeLanguage('uk')}>UK</button>
      <button onClick={() => i18n.changeLanguage('tr')}>TR</button>
    </div>
  );
}

function Header() {
  const { t } = useTranslation();
  return (
    <header style={{ padding: '1em', background: '#222', color: '#fff' }}>
      <h1>My Site Title</h1>
      <LanguageSwitcher />
      <nav>
        <Link to="/" style={{ color: '#fff', marginRight: 10 }}>{t('home')}</Link>
        <Link to="/about" style={{ color: '#fff', marginRight: 10 }}>{t('about')}</Link>
        <Link to="/contact" style={{ color: '#fff' }}>{t('contact')}</Link>
      </nav>
    </header>
  );
}

export default Header;