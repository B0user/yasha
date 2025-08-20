import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import { HomePage } from './pages/HomePage';

function App() {
  return (
    <>
      <header className="site-header">
        <div className="container nav">
          <Link to="/" className="brand" aria-label="ООО УЗНУР-ПРОДЖЕКТ">
            <span className="brand-badge" />
            ООО «УЗНУР-ПРОДЖЕКТ»
          </Link>
          <nav className="nav-links">
            <a href="#about">О компании</a>
            <a href="#services">Услуги</a>
            <a href="#partners">Партнёры</a>
            <a href="#projects">Проекты</a>
            <a href="#active-projects">Действующие</a>
            <a href="#benefits">Почему мы?</a>
            <a href="#contacts">Контакты</a>
          </nav>
        </div>
      </header>

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
