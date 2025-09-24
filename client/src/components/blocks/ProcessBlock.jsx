import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Step,
  StepLabel,
  Stepper,
  Stack
} from '@mui/material';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from '@mui/lab';

import { motion } from 'framer-motion';

// 6. Блок «Как мы работаем» (Процесс) - 3 варианта
export const ProcessBlock = ({ 
  variant = 'A',
  title = 'Как мы работаем',
  steps = [
    {
      number: '1',
      title: 'Заявка',
      description: 'Звонок в течение 30 минут',
      icon: '📞',
      timeline: 'День 1'
    },
    {
      number: '2',
      title: 'Замер и смета',
      description: 'За 1 день',
      icon: '📏',
      timeline: 'День 2'
    },
    {
      number: '3',
      title: 'Договор',
      description: 'С фиксированной ценой',
      icon: '📋',
      timeline: 'День 3'
    },
    {
      number: '4',
      title: 'Выполнение работ',
      description: 'И сдача с гарантией',
      icon: '🔨',
      timeline: '7-30 дней'
    }
  ],
  backgroundColor = '#f8f9fa',
  accentColor = '#ff6b35',
  sx = {}
}) => {

  // Вариант A: 4 шага с иконками
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
          {steps.map((step, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card sx={{ 
                  p: 3, 
                  textAlign: 'center', 
                  height: '100%', 
                  boxShadow: 3,
                  position: 'relative',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    transition: 'transform 0.3s ease'
                  }
                }}>
                  <Box
                    sx={{
                      width: 60,
                      height: 60,
                      borderRadius: '50%',
                      bgcolor: accentColor,
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.5rem',
                      fontWeight: 'bold',
                      mx: 'auto',
                      mb: 2
                    }}
                  >
                    {step.number}
                  </Box>
                  <Box sx={{ fontSize: '2rem', mb: 2 }}>
                    {step.icon}
                  </Box>
                  <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold', color: '#2c3e50' }}>
                    {step.title}
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#666' }}>
                    {step.description}
                  </Typography>
                  
                  {/* Connector line */}
                  {index < steps.length - 1 && (
                    <Box
                      sx={{
                        position: 'absolute',
                        top: '50%',
                        right: -20,
                        width: 40,
                        height: 2,
                        bgcolor: accentColor,
                        display: { xs: 'none', md: 'block' },
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          right: -5,
                          top: -3,
                          width: 0,
                          height: 0,
                          borderLeft: `8px solid ${accentColor}`,
                          borderTop: '4px solid transparent',
                          borderBottom: '4px solid transparent'
                        }
                      }}
                    />
                  )}
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );

  // Вариант B: Таймлайн (по дням)
  const VariantB = () => (
    <Box sx={{ py: 8, bgcolor: backgroundColor, ...sx }}>
      <Container maxWidth="md">
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
        
        <Timeline position="alternate">
          {steps.map((step, index) => (
            <TimelineItem key={index}>
              <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                align={index % 2 === 0 ? 'right' : 'left'}
                variant="body2"
                color="text.secondary"
              >
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: accentColor }}>
                  {step.timeline}
                </Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot
                  sx={{
                    bgcolor: accentColor,
                    width: 60,
                    height: 60,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem'
                  }}
                >
                  {step.icon}
                </TimelineDot>
                {index < steps.length - 1 && <TimelineConnector sx={{ bgcolor: accentColor }} />}
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card sx={{ p: 3, boxShadow: 3 }}>
                    <Typography variant="h6" component="span" sx={{ fontWeight: 'bold', color: '#2c3e50' }}>
                      {step.title}
                    </Typography>
                    <Typography variant="body1" sx={{ mt: 1, color: '#666' }}>
                      {step.description}
                    </Typography>
                  </Card>
                </motion.div>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </Box>
  );

  // Вариант C: Инфографика «от заявки до результата»
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
        
        <Box sx={{ position: 'relative', py: 4 }}>
          {/* Main flow line */}
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '10%',
              right: '10%',
              height: 4,
              bgcolor: accentColor,
              borderRadius: 2,
              display: { xs: 'none', md: 'block' }
            }}
          />
          
          <Grid container spacing={2} alignItems="center">
            {steps.map((step, index) => (
              <Grid item xs={12} md={3} key={index}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  viewport={{ once: true }}
                >
                  <Box sx={{ textAlign: 'center', position: 'relative' }}>
                    {/* Step circle */}
                    <Box
                      sx={{
                        width: 100,
                        height: 100,
                        borderRadius: '50%',
                        bgcolor: 'white',
                        border: `4px solid ${accentColor}`,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mx: 'auto',
                        mb: 2,
                        position: 'relative',
                        zIndex: 2,
                        boxShadow: 3
                      }}
                    >
                      <Box sx={{ fontSize: '2rem', mb: 0.5 }}>
                        {step.icon}
                      </Box>
                      <Typography variant="h6" sx={{ fontWeight: 'bold', color: accentColor }}>
                        {step.number}
                      </Typography>
                    </Box>
                    
                    {/* Step info */}
                    <Card sx={{ p: 2, boxShadow: 2, minHeight: 120 }}>
                      <Typography variant="h6" sx={{ mb: 1, fontWeight: 'bold', color: '#2c3e50' }}>
                        {step.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#666', mb: 1 }}>
                        {step.description}
                      </Typography>
                      <Typography variant="caption" sx={{ color: accentColor, fontWeight: 'bold' }}>
                        {step.timeline}
                      </Typography>
                    </Card>
                    
                    {/* Arrow */}
                    {index < steps.length - 1 && (
                      <Box
                        sx={{
                          position: 'absolute',
                          top: '45%',
                          right: { xs: '45%', md: '-15%' },
                          transform: { xs: 'rotate(90deg)', md: 'none' },
                          fontSize: '2rem',
                          color: accentColor,
                          zIndex: 3
                        }}
                      >
                        →
                      </Box>
                    )}
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
          
          {/* Result badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <Box sx={{ textAlign: 'center', mt: 6 }}>
              <Card sx={{ 
                display: 'inline-block', 
                p: 3, 
                bgcolor: accentColor, 
                color: 'white',
                boxShadow: 4
              }}>
                <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1 }}>
                  🎉 РЕЗУЛЬТАТ
                </Typography>
                <Typography variant="body1">
                  Качественно выполненные работы с гарантией
                </Typography>
              </Card>
            </Box>
          </motion.div>
        </Box>
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
