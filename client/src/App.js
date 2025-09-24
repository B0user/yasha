import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import { HomePage } from './pages/HomePage';
import { LandingVersion1 } from './pages/LandingVersion1';
import AVTest1Page from './pages/av__test__1';
import logo from './assets/logo_stop.webp';
import {
  Box,
  Container,
  Grid,
  Typography,
  Divider
} from "@mui/material";

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
        <Route path="/ad/3" element={<AVTest1Page />} />
      </Routes>

      {/* Footer */}
      <Box sx={{ bgcolor: '#1a252f', color: 'white', py: 4 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                ООО «УЗНУР-ПРОДЖЕКТ»
              </Typography>
              <Typography variant="body2" sx={{ mb: 2, color: '#bdc3c7' }}>
                Проектирование и строительство промышленных и жилых объектов
              </Typography>
            </Grid>
            
            <Grid item xs={12} md={3}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                Основатель
              </Typography>
              <Typography variant="body2" sx={{ color: '#bdc3c7' }}>
                Нуриев Яшар Рахимжонович
              </Typography>
              <Typography variant="body2" sx={{ color: '#bdc3c7' }}>
                yashar.nuriev@mail.ru
              </Typography>
            </Grid>
            
            <Grid item xs={12} md={3}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                Директор по развитию
              </Typography>
              <Typography variant="body2" sx={{ color: '#bdc3c7' }}>
                Маеров Александр Сергеевич
              </Typography>
              <Typography variant="body2" sx={{ color: '#bdc3c7' }}>
                sfera_krs@mail.ru
              </Typography>
            </Grid>
          </Grid>
          
          <Divider sx={{ my: 3, bgcolor: '#34495e' }} />
          
          <Typography variant="body2" sx={{ textAlign: 'center', color: '#7f8c8d' }}>
            © 2025 ООО «УЗНУР-ПРОДЖЕКТ». Все права защищены.
          </Typography>
        </Container>
      </Box>
    </>
  );
}

export default App;
