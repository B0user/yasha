import React, { useState } from 'react';
import { motion } from "framer-motion";
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Chip,
  IconButton,
  Avatar,
  Divider
} from "@mui/material";
import {
  Engineering,
  Construction,
  Visibility,
  Phone,
  Email,
  LocationOn,
  AttachFile,
  Download,
  Business,
  Timeline,
  Speed,
  Groups,
  CheckCircle,
  Menu as MenuIcon,
  Close as CloseIcon
} from "@mui/icons-material";
import {
  AppBar,
  Toolbar,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useScrollTrigger,
  Slide,
  useMediaQuery,
  useTheme
} from "@mui/material";

import Partners from "../sections/Partners";
import { Projects } from '../sections/Projects';
import { Contacts } from '../sections/Contacts';
import { SMR } from '../sections/SMR';
import logo from '../assets/logo_stop.webp';

export function LandingVersion1() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const trigger = useScrollTrigger();

  const navigationItems = [
    { label: 'Главная', id: 'hero' },
    { label: 'О нас', id: 'about' },
    { label: 'Услуги', id: 'services' },
    { label: 'Партнёры', id: 'partners' },
    { label: 'Проекты', id: 'projects' },
    { label: 'СМР', id: 'smr' },
    { label: 'Контакты', id: 'contacts' }
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMobileOpen(false);
  };

  const updateField = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = 'Заявка с сайта УЗНУР-ПРОДЖЕКТ';
    const body = `Имя: ${form.name}\nТелефон: ${form.phone}\nEmail: ${form.email}\nСообщение: ${form.message}`;
    window.location.href = `mailto:sfera_krs@mail.ru?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const scrollToForm = () => {
    document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' });
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', my: 2 }}>
        <img src={logo} alt="Логотип УЗНУР-ПРОДЖЕКТ" style={{ width: 40, height: 40, marginRight: 8 }} />
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          УЗНУР-ПРОДЖЕКТ
        </Typography>
      </Box>
      <Divider />
      <List>
        {navigationItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            <Button
              fullWidth
              onClick={() => scrollToSection(item.id)}
              sx={{ 
                py: 1.5, 
                justifyContent: 'center',
                fontSize: '0.9rem'
              }}
            >
              {item.label}
            </Button>
          </ListItem>
        ))}
        <ListItem disablePadding>
          <Button
            fullWidth
            onClick={scrollToForm}
            variant="contained"
            sx={{
              py: 1.5,
              mx: 2,
              bgcolor: '#ff6b35',
              '&:hover': { bgcolor: '#e55a2b' },
              fontWeight: 'bold',
              fontSize: '0.9rem'
            }}
          >
            Смета за 1 день
          </Button>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box sx={{ bgcolor: '#ffffff' }}>
      {/* Navigation */}
      <Slide appear={false} direction="down" in={!trigger}>
        <AppBar
          position="fixed"
          sx={{
            bgcolor: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
            color: '#2c3e50'
          }}
        >
          <Toolbar>
            <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
              <img src={logo} alt="Логотип УЗНУР-ПРОДЖЕКТ" style={{ width: 40, height: 40, marginRight: 12 }} />
              <Typography
                variant="h6"
                component="div"
                sx={{ fontWeight: 'bold', color: '#2c3e50' }}
              >
                ООО «УЗНУР-ПРОДЖЕКТ»
              </Typography>
            </Box>
            
            {!isMobile ? (
              <Stack direction="row" spacing={2} alignItems="center">
                {navigationItems.map((item) => (
                  <Button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    sx={{
                      color: '#2c3e50',
                      fontSize: { xs: '0.8rem', md: '0.85rem' },
                      px: { xs: 1, md: 1.5 },
                      py: { xs: 0.5, md: 0.75 },
                      '&:hover': {
                        bgcolor: 'rgba(255, 107, 53, 0.1)',
                        color: '#ff6b35'
                      }
                    }}
                  >
                    {item.label}
                  </Button>
                ))}
                <Button
                  variant="contained"
                  onClick={scrollToForm}
                  sx={{
                    bgcolor: '#ff6b35',
                    '&:hover': { bgcolor: '#e55a2b' },
                    fontWeight: 'bold',
                    fontSize: { xs: '0.8rem', md: '0.85rem' },
                    px: { xs: 1.5, md: 2 },
                    py: { xs: 0.5, md: 0.75 },
                    ml: 2
                  }}
                >
                  Смета за 1 день
                </Button>
              </Stack>
            ) : (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ color: '#2c3e50' }}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Toolbar>
        </AppBar>
      </Slide>

      {/* Mobile Navigation Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 }
        }}
      >
        {drawer}
      </Drawer>
      
      
      
      
      
      {/* Hero Section */}
      <Box
        id="hero"
        sx={{
          minHeight: '100vh',
          background: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url("https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          color: 'white',
          position: 'relative',
          pt: 8
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h2"
              component="h1"
              sx={{
                fontWeight: 'bold',
                mb: 3,
                fontSize: { xs: '2rem', md: '3.5rem' },
                textAlign: 'center'
              }}
            >
              Проектирование и строительство промышленных и жилых объектов в Москве и области
            </Typography>
            
            <Typography
              variant="h5"
              sx={{
                mb: 5,
                textAlign: 'center',
                maxWidth: '800px',
                mx: 'auto',
                fontSize: { xs: '1.1rem', md: '1.5rem' }
              }}
            >
              Разрабатываем КМ и КМД, выполняем Строительно-монтажные работы и авторский надзор. Смета за 1 день, встреча в течение 48 часов.
            </Typography>

            <Stack
              direction={{ xs: 'column', md: 'row' }}
              spacing={3}
              justifyContent="center"
              alignItems="center"
            >
              <Button
                variant="contained"
                size="large"
                onClick={scrollToForm}
                sx={{
                  bgcolor: '#ff6b35',
                  '&:hover': { bgcolor: '#e55a2b' },
                  px: 4,
                  py: 2,
                  fontSize: '1.1rem',
                  fontWeight: 'bold'
                }}
              >
                Получить смету за 1 день
              </Button>
              
              <Button
                variant="outlined"
                size="large"
                onClick={scrollToForm}
                sx={{
                  borderColor: 'white',
                  color: 'white',
                  '&:hover': { borderColor: '#ff6b35', bgcolor: 'rgba(255,107,53,0.1)' },
                  px: 4,
                  py: 2,
                  fontSize: '1.1rem'
                }}
              >
                Назначить консультацию
              </Button>
              
              <Button
                variant="text"
                size="large"
                startIcon={<Download />}
                sx={{
                  color: 'white',
                  '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' },
                  px: 4,
                  py: 2,
                  fontSize: '1.1rem'
                }}
              >
                Скачать портфолио проектов
              </Button>
            </Stack>
          </motion.div>
        </Container>
      </Box>

      
      {/* Why Choose Us Section */}
      <Container maxWidth="xl" sx={{ py: 8 }} id="about">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h3"
            component="h2"
            sx={{
              textAlign: 'center',
              mb: 6,
              fontWeight: 'bold',
              color: '#2c3e50'
            }}
          >
            Почему выбирают нас
          </Typography>
          
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              gap: { xs: 3, md: 2 },
              alignItems: 'stretch'
            }}
          >
            {[
              {
                icon: <CheckCircle sx={{ fontSize: 48, color: '#27ae60' }} />,
                title: '12+ объектов сдано',
                subtitle: 'в 2023–2024 гг.'
              },
              {
                icon: <Business sx={{ fontSize: 48, color: '#3498db' }} />,
                title: 'Работаем с федеральными девелоперами',
                subtitle: 'Самолет, ЗИАС, Профметалл, АНТ ЯПЫ, АНТТЕК, ТСЖ, ЖСК'
              },
              {
                icon: <Speed sx={{ fontSize: 48, color: '#e74c3c' }} />,
                title: 'Срок расчёта сметы',
                subtitle: '1 день'
              },
              {
                icon: <Timeline sx={{ fontSize: 48, color: '#9b59b6' }} />,
                title: 'Опыт проектирования',
                subtitle: 'жилых и промышленных объектов от 1 000 м²'
              },
              {
                icon: <Groups sx={{ fontSize: 48, color: '#f39c12' }} />,
                title: 'Полный цикл',
                subtitle: 'от проектирования до авторского надзора'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                style={{ flex: 1 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    textAlign: 'center',
                    p: { xs: 3, md: 4 },
                    mx: { xs: 0, md: 1 },
                    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      transition: 'transform 0.3s ease'
                    }
                  }}
                >
                  <Box sx={{ mb: 2 }}>
                    {item.icon}
                  </Box>
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      fontWeight: 'bold', 
                      mb: 1,
                      fontSize: { xs: '1rem', md: '1.1rem' },
                      minHeight: { xs: 'auto', md: '3rem' },
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    color="text.secondary"
                    sx={{ 
                      fontSize: { xs: '0.85rem', md: '0.9rem' },
                      lineHeight: 1.5
                    }}
                  >
                    {item.subtitle}
                  </Typography>
                </Card>
              </motion.div>
            ))}
          </Box>
          
          <Box sx={{ textAlign: 'center', mt: 6 }}>
            <Button
              variant="contained"
              size="large"
              onClick={scrollToForm}
              sx={{
                bgcolor: '#ff6b35',
                '&:hover': { bgcolor: '#e55a2b' },
                px: 4,
                py: 2
              }}
            >
              Оставить заявку на расчёт сметы
            </Button>
          </Box>
        </motion.div>
      </Container>
      {/* Partners Section */}
      <Box id="partners">
        <Partners />
      </Box>
      {/* Services Section */}
      <Box sx={{ bgcolor: '#f8f9fa', py: 10 }} id="services">
        <Container maxWidth="xl">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h3"
              component="h2"
              sx={{
                textAlign: 'center',
                mb: 8,
                fontWeight: 'bold',
                color: '#2c3e50'
              }}
            >
              Услуги
            </Typography>
            
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                gap: { xs: 3, md: 0 },
                alignItems: 'stretch'
              }}
            >
              {[
                {
                  icon: <Engineering sx={{ fontSize: 40, color: '#3498db' }} />,
                  title: 'Проектная документация',
                  description: 'Архитектурные, конструктивные, инженерные решения',
                  targetSection: 'projects'
                },
                {
                  icon: <Construction sx={{ fontSize: 40, color: '#e74c3c' }} />,
                  title: 'Строительно-монтажные работы',
                  description: 'Фасады, светопрозрачные конструкции, отделочные работы, ремонт кровель, работы по внутренним инженерным сетям',
                  targetSection: 'smr'
                },
                {
                  icon: <Visibility sx={{ fontSize: 40, color: '#27ae60' }} />,
                  title: 'Авторский надзор',
                  description: 'Контроль качества, соответствие нормам',
                  targetSection: 'contacts'
                },
                {
                  icon: <Engineering sx={{ fontSize: 40, color: '#9b59b6' }} />,
                  title: 'Разработка КМ и КМД',
                  description: 'Проектирование, изготовление, поставка и монтаж',
                  targetSection: 'projects'
                }
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  style={{ flex: 1 }}
                >
                  <Box
                    sx={{
                      textAlign: 'center',
                      p: { xs: 3, md: 4 },
                      height: '100%',
                      cursor: 'pointer',
                      borderRadius: 2,
                      bgcolor: 'white',
                      mx: { xs: 0, md: 1 },
                      boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 8px 30px rgba(0,0,0,0.15)',
                        bgcolor: '#ffffff'
                      }
                    }}
                    onClick={() => scrollToSection(service.targetSection)}
                  >
                    <Box sx={{ mb: 3 }}>
                      {service.icon}
                    </Box>
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        fontWeight: 'bold', 
                        mb: 2, 
                        fontSize: { xs: '1rem', md: '1.1rem' },
                        color: '#2c3e50',
                        minHeight: { xs: 'auto', md: '3rem' },
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      {service.title}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      color="text.secondary" 
                      sx={{ 
                        fontSize: { xs: '0.85rem', md: '0.9rem' },
                        lineHeight: 1.5
                      }}
                    >
                      {service.description}
                    </Typography>
                  </Box>
                </motion.div>
              ))}
            </Box>
            
            <Box sx={{ textAlign: 'center', mt: 8 }}>
              <Button
                variant="contained"
                size="large"
                onClick={scrollToForm}
                sx={{
                  bgcolor: '#ff6b35',
                  '&:hover': { bgcolor: '#e55a2b' },
                  px: 6,
                  py: 2.5,
                  fontSize: '1.1rem',
                  fontWeight: 'bold'
                }}
              >
                Получить консультацию по вашему проекту
              </Button>
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* Portfolio/Cases Section */}
      <Box sx={{ py: 6 }} id="projects">
        <Projects />
      </Box>
      
      {/* SMR Section */}
      <Box sx={{ bgcolor: '#f8f9fa', py: 10 }} id="smr">
        <SMR />
      </Box>
      

      

      {/* Contact Form Section */}
      <Container maxWidth="md" sx={{ py: 8 }} id="contact-form">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h3"
            component="h2"
            sx={{
              textAlign: 'center',
              mb: 6,
              fontWeight: 'bold',
              color: '#2c3e50'
            }}
          >
            Форма заявки
          </Typography>
          
          <Card sx={{ p: 4, boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
            <form onSubmit={handleSubmit}>
              <Stack spacing={3}>
                <TextField
                  name="name"
                  label="Имя"
                  value={form.name}
                  onChange={updateField}
                  placeholder="Ваше имя"
                  required
                  fullWidth
                  variant="outlined"
                />
                <TextField
                  name="phone"
                  label="Телефон"
                  type="tel"
                  value={form.phone}
                  onChange={updateField}
                  placeholder="Ваш телефон"
                  required
                  fullWidth
                  variant="outlined"
                />
                <TextField
                  name="email"
                  label="Email"
                  type="email"
                  value={form.email}
                  onChange={updateField}
                  placeholder="Ваш e-mail"
                  required
                  fullWidth
                  variant="outlined"
                />
                <TextField
                  name="message"
                  label="Опишите задачу"
                  value={form.message}
                  onChange={updateField}
                  placeholder="Кратко опишите вашу задачу"
                  multiline
                  minRows={4}
                  fullWidth
                  variant="outlined"
                />
                <Button
                  variant="outlined"
                  startIcon={<AttachFile />}
                  sx={{
                    alignSelf: 'flex-start',
                    borderColor: '#7f8c8d',
                    color: '#7f8c8d',
                    '&:hover': { borderColor: '#34495e', bgcolor: 'rgba(52,73,94,0.1)' }
                  }}
                >
                  Прикрепить файл проекта
                </Button>
                <Button
                  variant="contained"
                  type="submit"
                  size="large"
                  sx={{
                    bgcolor: '#ff6b35',
                    '&:hover': { bgcolor: '#e55a2b' },
                    py: 2,
                    fontSize: '1.1rem',
                    fontWeight: 'bold'
                  }}
                >
                  Оставить заявку → Получить смету
                </Button>
              </Stack>
            </form>
          </Card>
        </motion.div>
      </Container>

      {/* Contacts Section */}
      <Box sx={{ bgcolor: '#2c3e50', color: 'white', py: 8 }} id="contacts">
        <Container maxWidth="lg">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            fullwidth
          >
            <Typography
              variant="h3"
              component="h2"
              sx={{
                textAlign: 'center',
                mb: 6,
                fontWeight: 'bold'
              }}
            >
              Контакты
            </Typography>
            
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <Card sx={{ p: 4 }}>
                  <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                      <Box>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, color: '#2c3e50' }}>
                          <LocationOn sx={{ mr: 1, verticalAlign: 'middle' }} />
                          Адрес офиса
                        </Typography>
                        <Typography variant="body1" sx={{ mb: 3, color: '#7f8c8d' }}>
                          123007, Москва, ул. 5-я Магистральная, д.12
                        </Typography>
                        
                        <Box
                          sx={{
                            position: 'relative',
                            width: '100%',
                            paddingBottom: '56.25%',
                            borderRadius: 2,
                            overflow: 'hidden'
                          }}
                        >
                          <iframe
                            title="map"
                            src="https://www.google.com/maps?q=123007, Москва, ул. 5-я Магистральная, д.12&output=embed"
                            style={{
                              position: 'absolute',
                              inset: 0,
                              width: '100%',
                              height: '100%',
                              border: 0
                            }}
                            loading="lazy"
                            allowFullScreen
                          />
                        </Box>
                      </Box>
                    </Grid>
                    
                    <Grid item xs={12} md={6}>
                      <Stack spacing={4} sx={{ height: '100%' }}>
                        <Box>
                          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, color: '#2c3e50' }}>
                            Основатель компании
                          </Typography>
                          <Typography variant="body1" sx={{ mb: 1, color: '#34495e' }}>
                            Нуриев Яшар Рахимжонович
                          </Typography>
                          <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
                            <Button
                              variant="contained"
                              startIcon={<Phone />}
                              href="tel:+79771284160"
                              sx={{ bgcolor: '#27ae60', '&:hover': { bgcolor: '#229954' } }}
                            >
                              +7 (977) 128-41-60
                            </Button>
                          </Stack>
                        </Box>
                        
                        <Box>
                          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, color: '#2c3e50' }}>
                            Директор по развитию бизнеса
                          </Typography>
                          <Typography variant="body1" sx={{ mb: 1, color: '#34495e' }}>
                            Маеров Александр Сергеевич
                          </Typography>
                          <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
                            <Button
                              variant="contained"
                              startIcon={<Phone />}
                              href="tel:+79272822430"
                              sx={{ bgcolor: '#27ae60', '&:hover': { bgcolor: '#229954' } }}
                            >
                              +7 (927) 282-24-30
                            </Button>
                            <Button
                              variant="outlined"
                              startIcon={<Email />}
                              href="mailto:sfera_krs@mail.ru"
                              sx={{ borderColor: '#3498db', color: '#3498db' }}
                            >
                              Email
                            </Button>
                          </Stack>
                        </Box>
                      </Stack>
                    </Grid>
                  </Grid>
                </Card>
              </Grid>
            </Grid>
          </motion.div>
          <Box sx={{ mt: 3 }}>
                      <Button
                        variant="contained"
                        size="large"
                        fullWidth
                        onClick={scrollToForm}
                        sx={{
                          bgcolor: '#ff6b35',
                          '&:hover': { bgcolor: '#e55a2b' },
                          py: 2.5,
                          fontSize: '1.1rem',
                          fontWeight: 'bold'
                        }}
                      >
                        Назначить встречу
                      </Button>
                    </Box>
        </Container>
      </Box>
    </Box>
  );
}
