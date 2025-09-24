import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Rating,
  IconButton,
  Stack,
  Chip,
  Paper
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

// 7. Блок «Отзывы» - 3 варианта
export const ReviewsBlock = ({ 
  variant = 'A',
  title = 'Отзывы наших клиентов',
  subtitle = 'Более 500 довольных клиентов за 5 лет работы',
  reviews = [
    {
      id: 1,
      name: 'Анна Петрова',
      position: 'Директор ООО "Строй+"',
      avatar: '/api/placeholder/60/60',
      rating: 5,
      text: 'Отличная работа! Сделали ремонт офиса быстро и качественно. Рекомендую всем!',
      date: '15.03.2024',
      project: 'Ремонт офиса 120 м²',
      tags: ['Офис', 'Быстро', 'Качественно']
    },
    {
      id: 2,
      name: 'Михаил Сидоров',
      position: 'Владелец квартиры',
      avatar: '/api/placeholder/60/60',
      rating: 5,
      text: 'Делали ремонт квартиры под ключ. Все сроки соблюдены, цена не изменилась. Очень довольны результатом!',
      date: '28.02.2024',
      project: 'Квартира 85 м²',
      tags: ['Квартира', 'Под ключ', 'В срок']
    },
    {
      id: 3,
      name: 'Елена Козлова',
      position: 'Управляющая рестораном',
      avatar: '/api/placeholder/60/60',
      rating: 5,
      text: 'Профессиональный подход к ремонту ресторана. Учли все особенности заведения общепита.',
      date: '10.02.2024',
      project: 'Ресторан 200 м²',
      tags: ['Ресторан', 'Профессионально', 'Опыт']
    },
    {
      id: 4,
      name: 'Дмитрий Волков',
      position: 'Собственник дома',
      avatar: '/api/placeholder/60/60',
      rating: 5,
      text: 'Сделали капремонт дома. Работали аккуратно, убирали за собой. Соседи даже не жаловались!',
      date: '05.01.2024',
      project: 'Частный дом 150 м²',
      tags: ['Дом', 'Аккуратно', 'Капремонт']
    }
  ],
  backgroundColor = '#f8f9fa',
  accentColor = '#ff6b35',
  sx = {}
}) => {
  const [currentReview, setCurrentReview] = useState(0);

  // Вариант A: Карточки отзывов в сетке
  const VariantA = () => (
    <Box sx={{ py: 8, bgcolor: backgroundColor, ...sx }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            variant="h3"
            component="h2"
            sx={{
              mb: 2,
              fontWeight: 'bold',
              color: '#2c3e50'
            }}
          >
            {title}
          </Typography>
          <Typography variant="h6" sx={{ color: '#666', mb: 4 }}>
            {subtitle}
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {reviews.map((review, index) => (
            <Grid item xs={12} md={6} lg={3} key={review.id}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card sx={{ 
                  height: '100%', 
                  p: 3, 
                  boxShadow: 3,
                  position: 'relative',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    transition: 'transform 0.3s ease',
                    boxShadow: 6
                  }
                }}>
                  <FormatQuoteIcon 
                    sx={{ 
                      position: 'absolute',
                      top: 16,
                      right: 16,
                      color: accentColor,
                      opacity: 0.3,
                      fontSize: '2rem'
                    }} 
                  />
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Avatar 
                      src={review.avatar} 
                      sx={{ width: 50, height: 50, mr: 2 }}
                    >
                      {review.name.charAt(0)}
                    </Avatar>
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#2c3e50' }}>
                        {review.name}
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#666' }}>
                        {review.position}
                      </Typography>
                    </Box>
                  </Box>

                  <Rating value={review.rating} readOnly sx={{ mb: 2 }} />
                  
                  <Typography variant="body1" sx={{ mb: 2, color: '#333', lineHeight: 1.6 }}>
                    {review.text}
                  </Typography>

                  <Box sx={{ mb: 2 }}>
                    {review.tags.map((tag, tagIndex) => (
                      <Chip 
                        key={tagIndex}
                        label={tag} 
                        size="small" 
                        sx={{ 
                          mr: 0.5, 
                          mb: 0.5,
                          bgcolor: `${accentColor}20`,
                          color: accentColor
                        }} 
                      />
                    ))}
                  </Box>

                  <Typography variant="caption" sx={{ color: '#999' }}>
                    {review.project} • {review.date}
                  </Typography>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );

  // Вариант B: Слайдер отзывов
  const VariantB = () => (
    <Box sx={{ py: 8, bgcolor: backgroundColor, ...sx }}>
      <Container maxWidth="md">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            variant="h3"
            component="h2"
            sx={{
              mb: 2,
              fontWeight: 'bold',
              color: '#2c3e50'
            }}
          >
            {title}
          </Typography>
          <Typography variant="h6" sx={{ color: '#666' }}>
            {subtitle}
          </Typography>
        </Box>

        <Box sx={{ position: 'relative' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentReview}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <Card sx={{ p: 4, textAlign: 'center', boxShadow: 4 }}>
                <FormatQuoteIcon 
                  sx={{ 
                    fontSize: '3rem',
                    color: accentColor,
                    mb: 2
                  }} 
                />
                
                <Typography 
                  variant="h5" 
                  sx={{ 
                    mb: 3, 
                    fontStyle: 'italic',
                    color: '#333',
                    lineHeight: 1.6
                  }}
                >
                  "{reviews[currentReview].text}"
                </Typography>

                <Rating value={reviews[currentReview].rating} readOnly sx={{ mb: 3 }} />

                <Avatar 
                  src={reviews[currentReview].avatar} 
                  sx={{ 
                    width: 80, 
                    height: 80, 
                    mx: 'auto', 
                    mb: 2,
                    border: `3px solid ${accentColor}`
                  }}
                >
                  {reviews[currentReview].name.charAt(0)}
                </Avatar>

                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#2c3e50' }}>
                  {reviews[currentReview].name}
                </Typography>
                <Typography variant="body1" sx={{ color: '#666', mb: 2 }}>
                  {reviews[currentReview].position}
                </Typography>
                <Typography variant="body2" sx={{ color: '#999' }}>
                  {reviews[currentReview].project} • {reviews[currentReview].date}
                </Typography>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <IconButton
            onClick={() => setCurrentReview(prev => prev === 0 ? reviews.length - 1 : prev - 1)}
            sx={{
              position: 'absolute',
              left: -20,
              top: '50%',
              transform: 'translateY(-50%)',
              bgcolor: 'white',
              boxShadow: 2,
              '&:hover': { bgcolor: accentColor, color: 'white' }
            }}
          >
            <ArrowBackIosIcon />
          </IconButton>

          <IconButton
            onClick={() => setCurrentReview(prev => prev === reviews.length - 1 ? 0 : prev + 1)}
            sx={{
              position: 'absolute',
              right: -20,
              top: '50%',
              transform: 'translateY(-50%)',
              bgcolor: 'white',
              boxShadow: 2,
              '&:hover': { bgcolor: accentColor, color: 'white' }
            }}
          >
            <ArrowForwardIosIcon />
          </IconButton>

          {/* Dots indicator */}
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
            {reviews.map((_, index) => (
              <Box
                key={index}
                onClick={() => setCurrentReview(index)}
                sx={{
                  width: 12,
                  height: 12,
                  borderRadius: '50%',
                  bgcolor: index === currentReview ? accentColor : '#ddd',
                  mx: 0.5,
                  cursor: 'pointer',
                  transition: 'background-color 0.3s ease'
                }}
              />
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );

  // Вариант C: Мозаика отзывов с выделенным главным
  const VariantC = () => (
    <Box sx={{ py: 8, bgcolor: backgroundColor, ...sx }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            variant="h3"
            component="h2"
            sx={{
              mb: 2,
              fontWeight: 'bold',
              color: '#2c3e50'
            }}
          >
            {title}
          </Typography>
          <Typography variant="h6" sx={{ color: '#666' }}>
            {subtitle}
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {/* Главный отзыв */}
          <Grid item xs={12} md={8}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card sx={{ 
                p: 4, 
                height: '100%', 
                boxShadow: 4,
                bgcolor: accentColor,
                color: 'white',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <Box
                  sx={{
                    position: 'absolute',
                    top: -20,
                    right: -20,
                    width: 100,
                    height: 100,
                    borderRadius: '50%',
                    bgcolor: 'rgba(255,255,255,0.1)'
                  }}
                />
                
                <FormatQuoteIcon 
                  sx={{ 
                    fontSize: '3rem',
                    mb: 2,
                    opacity: 0.8
                  }} 
                />
                
                <Typography 
                  variant="h5" 
                  sx={{ 
                    mb: 3, 
                    fontWeight: 'bold',
                    lineHeight: 1.4
                  }}
                >
                  {reviews[0].text}
                </Typography>

                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Avatar 
                    src={reviews[0].avatar} 
                    sx={{ 
                      width: 60, 
                      height: 60, 
                      mr: 2,
                      border: '2px solid white'
                    }}
                  >
                    {reviews[0].name.charAt(0)}
                  </Avatar>
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                      {reviews[0].name}
                    </Typography>
                    <Typography variant="body1" sx={{ opacity: 0.9 }}>
                      {reviews[0].position}
                    </Typography>
                    <Rating 
                      value={reviews[0].rating} 
                      readOnly 
                      sx={{ 
                        '& .MuiRating-iconFilled': { color: 'white' },
                        '& .MuiRating-iconEmpty': { color: 'rgba(255,255,255,0.5)' }
                      }} 
                    />
                  </Box>
                </Box>

                <Typography variant="body2" sx={{ opacity: 0.8 }}>
                  {reviews[0].project} • {reviews[0].date}
                </Typography>
              </Card>
            </motion.div>
          </Grid>

          {/* Дополнительные отзывы */}
          <Grid item xs={12} md={4}>
            <Stack spacing={2}>
              {reviews.slice(1, 4).map((review, index) => (
                <motion.div
                  key={review.id}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Paper sx={{ 
                    p: 2, 
                    boxShadow: 2,
                    '&:hover': {
                      boxShadow: 4,
                      transform: 'translateY(-2px)',
                      transition: 'all 0.3s ease'
                    }
                  }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <Avatar 
                        src={review.avatar} 
                        sx={{ width: 40, height: 40, mr: 1.5 }}
                      >
                        {review.name.charAt(0)}
                      </Avatar>
                      <Box sx={{ flex: 1 }}>
                        <Typography variant="subtitle2" sx={{ fontWeight: 'bold', color: '#2c3e50' }}>
                          {review.name}
                        </Typography>
                        <Rating value={review.rating} readOnly size="small" />
                      </Box>
                    </Box>
                    
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: '#666',
                        lineHeight: 1.4,
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden'
                      }}
                    >
                      {review.text}
                    </Typography>
                  </Paper>
                </motion.div>
              ))}
            </Stack>
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
