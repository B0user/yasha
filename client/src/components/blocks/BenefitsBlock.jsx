import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Stack,
  Chip
} from '@mui/material';
import { motion } from 'framer-motion';

// 4. Блок «Почему выбирают нас» - 3 варианта
export const BenefitsBlock = ({ 
  variant = 'A',
  title = 'Почему выбирают нас',
  benefits = [
    {
      icon: '📐',
      title: 'Бесплатная смета и замеры',
      description: 'Экономия до 50 тыс. ₽',
      number: '12+'
    },
    {
      icon: '🛠️',
      title: 'Работаем по ГОСТ и СНИП',
      description: 'Гарантия до 5 лет',
      number: '5'
    },
    {
      icon: '📑',
      title: 'Сопровождение документации',
      description: '«Под ключ»',
      number: '100%'
    },
    {
      icon: '👷',
      title: 'Собственные специалисты',
      description: 'Проектировщики и монтажные бригады',
      number: '24/7'
    }
  ],
  columns = 4,
  backgroundColor = '#f8f9fa',
  accentColor = '#ff6b35',
  sx = {}
}) => {

  // Вариант A: 4 иконки + текст (короткие тезисы)
  const VariantA = () => (
    <Box sx={{ py: 8, bgcolor: backgroundColor, ...sx }}>
      <Container maxWidth="lg">
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
          {title}
        </Typography>
        <Grid container spacing={4}>
          {benefits.slice(0, columns).map((benefit, index) => (
            <Grid item xs={12} sm={6} md={12/columns} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card sx={{ p: 3, textAlign: 'center', height: '100%', boxShadow: 3 }}>
                  <Box sx={{ mb: 2, fontSize: '3rem' }}>
                    {benefit.icon}
                  </Box>
                  <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold', color: '#2c3e50' }}>
                    {benefit.title}
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#666' }}>
                    {benefit.description}
                  </Typography>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );

  // Вариант B: Лента преимуществ с цифрами
  const VariantB = () => (
    <Box sx={{ py: 8, bgcolor: backgroundColor, ...sx }}>
      <Container maxWidth="lg">
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
          {title}
        </Typography>
        <Stack 
          direction={{ xs: 'column', md: 'row' }} 
          spacing={4} 
          justifyContent="center"
          alignItems="center"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              style={{ flex: 1, width: '100%' }}
            >
              <Card sx={{ 
                p: 4, 
                textAlign: 'center', 
                height: '100%',
                border: `2px solid ${accentColor}`,
                borderRadius: 3,
                '&:hover': {
                  transform: 'translateY(-5px)',
                  transition: 'transform 0.3s ease'
                }
              }}>
                <Typography 
                  variant="h2" 
                  sx={{ 
                    fontWeight: 'bold', 
                    color: accentColor,
                    mb: 1
                  }}
                >
                  {benefit.number}
                </Typography>
                <Typography variant="h6" sx={{ mb: 1, fontWeight: 'bold', color: '#2c3e50' }}>
                  {benefit.title}
                </Typography>
                <Typography variant="body2" sx={{ color: '#666' }}>
                  {benefit.description}
                </Typography>
              </Card>
            </motion.div>
          ))}
        </Stack>
      </Container>
    </Box>
  );

  // Вариант C: Карточки преимуществ с фото
  const VariantC = () => (
    <Box sx={{ py: 8, bgcolor: backgroundColor, ...sx }}>
      <Container maxWidth="lg">
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
          {title}
        </Typography>
        <Grid container spacing={4}>
          {benefits.map((benefit, index) => (
            <Grid item xs={12} sm={6} md={6} key={index}>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card sx={{ 
                  display: 'flex',
                  alignItems: 'center',
                  p: 3,
                  height: '100%',
                  boxShadow: 3,
                  '&:hover': {
                    boxShadow: 6,
                    transition: 'box-shadow 0.3s ease'
                  }
                }}>
                  <Box
                    sx={{
                      width: 80,
                      height: 80,
                      borderRadius: '50%',
                      bgcolor: accentColor,
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '2rem',
                      mr: 3,
                      flexShrink: 0
                    }}
                  >
                    {benefit.icon}
                  </Box>
                  <Box>
                    <Typography variant="h6" sx={{ mb: 1, fontWeight: 'bold', color: '#2c3e50' }}>
                      {benefit.title}
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#666' }}>
                      {benefit.description}
                    </Typography>
                    {benefit.number && (
                      <Chip
                        label={benefit.number}
                        sx={{
                          mt: 1,
                          bgcolor: accentColor,
                          color: 'white',
                          fontWeight: 'bold'
                        }}
                      />
                    )}
                  </Box>
                </Card>
              </motion.div>
            </Grid>
          ))}
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
