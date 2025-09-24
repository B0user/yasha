import React from 'react';
import {
  Box,
  Button,
  Container,
  Typography,
  Grid,
  Stack,
  Chip
} from '@mui/material';
import { motion } from 'framer-motion';
import { CTAForm } from '../forms/CTAForm';

// 3. Заголовочный блок (Hero / Первый экран) - 3 варианта
export const HeroBlock = ({ 
  variant = 'A',
  title = 'Ремонт подъездов и инженерных сетей — смета за 1 день',
  subtitle = 'Бесплатный замер, полное сопровождение документации, гарантия до 5 лет',
  backgroundImage = 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
  buttonText = 'Заказать смету',
  buttonColor = '#ff6b35',
  benefits = [
    'Бесплатная смета за 24 часа',
    'Гарантия до 5 лет',
    'Работаем по ГОСТ и СНИП'
  ],
  beforeAfterImages = {
    before: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    after: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  showNotification,
  onButtonClick,
  sx = {}
}) => {

  // Вариант A: Большой заголовок + подзаголовок + фоновое фото + кнопка
  const VariantA = () => (
    <Box
      sx={{
        minHeight: '100vh',
        background: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url("${backgroundImage}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        color: 'white',
        pt: 8,
        ...sx
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontWeight: 'bold',
              mb: 3,
              fontSize: { xs: '2.5rem', md: '4rem' },
              lineHeight: 1.2,
              textAlign: 'center'
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="h5"
            sx={{
              mb: 5,
              opacity: 0.9,
              fontSize: { xs: '1.2rem', md: '1.5rem' },
              lineHeight: 1.4,
              textAlign: 'center',
              maxWidth: '800px',
              mx: 'auto'
            }}
          >
            {subtitle}
          </Typography>
          <Box sx={{ textAlign: 'center' }}>
            <Button
              variant="contained"
              size="large"
              onClick={onButtonClick}
              sx={{
                py: 2,
                px: 6,
                bgcolor: buttonColor,
                fontSize: '1.3rem',
                fontWeight: 'bold',
                borderRadius: 3,
                boxShadow: '0 4px 20px rgba(255,107,53,0.4)',
                '&:hover': {
                  bgcolor: buttonColor,
                  filter: 'brightness(0.9)',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 6px 25px rgba(255,107,53,0.5)'
                },
                transition: 'all 0.3s ease'
              }}
            >
              {buttonText}
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );

  // Вариант B: Заголовок + 3 преимущества + форма телефон
  const VariantB = () => (
    <Box sx={{ py: 8, bgcolor: '#f8f9fa', ...sx }}>
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={7}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography
                variant="h2"
                component="h1"
                sx={{
                  fontWeight: 'bold',
                  mb: 4,
                  fontSize: { xs: '2rem', md: '3rem' },
                  lineHeight: 1.2,
                  color: '#2c3e50'
                }}
              >
                {title}
              </Typography>
              <Stack spacing={2} sx={{ mb: 4 }}>
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Chip
                      label={benefit}
                      sx={{
                        bgcolor: buttonColor,
                        color: 'white',
                        fontSize: '1rem',
                        py: 2,
                        px: 1,
                        height: 'auto',
                        '& .MuiChip-label': {
                          px: 2,
                          py: 1
                        }
                      }}
                    />
                  </motion.div>
                ))}
              </Stack>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={5}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <CTAForm
                variant="B"
                title="Перезвоните мне"
                buttonText="Перезвоните мне"
                buttonColor={buttonColor}
                showNotification={showNotification}
              />
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );

  // Вариант C: Заголовок слева, фото «до/после» справа + форма
  const VariantC = () => (
    <Box sx={{ py: 8, ...sx }}>
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography
                variant="h2"
                component="h1"
                sx={{
                  fontWeight: 'bold',
                  mb: 3,
                  fontSize: { xs: '2rem', md: '2.5rem' },
                  lineHeight: 1.2,
                  color: '#2c3e50'
                }}
              >
                {title}
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  mb: 4,
                  color: '#666',
                  fontSize: { xs: '1rem', md: '1.2rem' },
                  lineHeight: 1.4
                }}
              >
                {subtitle}
              </Typography>
              <CTAForm
                variant="A"
                title=""
                buttonText={buttonText}
                buttonColor={buttonColor}
                showNotification={showNotification}
                sx={{ boxShadow: 1 }}
              />
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Box sx={{ position: 'relative' }}>
                    <Box
                      sx={{
                        height: 300,
                        backgroundImage: `url(${beforeAfterImages.before})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        borderRadius: 2,
                        position: 'relative'
                      }}
                    />
                    <Chip
                      label="ДО"
                      sx={{
                        position: 'absolute',
                        top: 10,
                        left: 10,
                        bgcolor: 'rgba(0,0,0,0.7)',
                        color: 'white',
                        fontWeight: 'bold'
                      }}
                    />
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box sx={{ position: 'relative' }}>
                    <Box
                      sx={{
                        height: 300,
                        backgroundImage: `url(${beforeAfterImages.after})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        borderRadius: 2,
                        position: 'relative'
                      }}
                    />
                    <Chip
                      label="ПОСЛЕ"
                      sx={{
                        position: 'absolute',
                        top: 10,
                        left: 10,
                        bgcolor: buttonColor,
                        color: 'white',
                        fontWeight: 'bold'
                      }}
                    />
                  </Box>
                </Grid>
              </Grid>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );

  const variants = {
    A: VariantA,
    B: VariantB,
    C: VariantC
  };

  const SelectedVariant = variants[variant] || VariantA;

  return <SelectedVariant />;
};
