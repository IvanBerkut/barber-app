import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  return (
    <div style={{ margin: '1em 0' }}>
      <button onClick={() => i18n.changeLanguage('en')}>EN</button>
      <button onClick={() => i18n.changeLanguage('de')}>DE</button>
      <button onClick={() => i18n.changeLanguage('uk')}>UK</button>
      <button onClick={() => i18n.changeLanguage('tr')}>TR</button>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <LanguageSwitcher />
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/contact">Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;