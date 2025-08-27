import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import { HomePage } from './pages/HomePage';
import logo from './assets/logo_stop.gif';


function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);
  const toggleMenu = () => setMenuOpen((v) => !v);

  const sections = [
    { href: '#cta', label: 'Заявка' },
    { href: '#about', label: 'О компании' },
    { href: '#services', label: 'Услуги' },
    { href: '#partners', label: 'Партнёры' },
    { href: '#projects', label: 'Проектирование' },
    { href: '#smr', label: 'СМР' },
    { href: '#benefits', label: 'Почему мы?' },
    { href: '#contacts', label: 'Контакты' },
  ];

  return (
    <>
      <header className="site-header">
        <div className="container nav">
          <Link to="/" className="brand" aria-label="ООО УЗНУР-ПРОДЖЕКТ" onClick={closeMenu}>
            <img src={logo} alt="Логотип УЗНУР-ПРОДЖЕКТ" className="brand-logo" />
            ООО «УЗНУР-ПРОДЖЕКТ»
          </Link>
          <nav className="nav-links">
            {sections.map((s) => (
              <a key={s.href} href={s.href}>{s.label}</a>
            ))}
          </nav>
          <button
            className={`burger${menuOpen ? ' is-open' : ''}`}
            aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
            aria-expanded={menuOpen}
            onClick={toggleMenu}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <div className={`overlay${menuOpen ? ' open' : ''}`} onClick={closeMenu}>
        <nav className="overlay-nav" onClick={(e) => e.stopPropagation()}>
          {sections.map((s) => (
            <a key={s.href} href={s.href} onClick={closeMenu}>{s.label}</a>
          ))}
        </nav>
      </div>

      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>

      <footer className="footer">
        <div className="container">© {new Date().getFullYear()} ООО «УЗНУР-ПРОДЖЕКТ». Все права защищены.</div>
      </footer>
    </>
  );
}

export default App;
