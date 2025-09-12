import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import { HomePage } from './pages/HomePage';
import { LandingVersion1 } from './pages/LandingVersion1';
import logo from './assets/logo_stop.webp';


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

      <Routes>
        <Route path="/" element={<LandingVersion1 />} />
        <Route path="/landingv1" element={<HomePage />} />
      </Routes>

      <footer className="footer">
        <div className="container">© {new Date().getFullYear()} ООО «УЗНУР-ПРОДЖЕКТ». Все права защищены.</div>
      </footer>
    </>
  );
}

export default App;
