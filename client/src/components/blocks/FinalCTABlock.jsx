import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  TextField,
  Stack,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Divider
} from '@mui/material';
import { motion } from 'framer-motion';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { CTAForm } from '../forms/CTAForm';

// 8. Финальный блок CTA - 3 варианта
export const FinalCTABlock = ({ 
  id = 'contact-form',
  variant = 'A',
  title = 'Готовы начать ремонт?',
  subtitle = 'Оставьте заявку и получите бесплатную консультацию уже сегодня',
  benefits = [
    'Бесплатный выезд и замер',
    'Смета в день обращения',
    'Гарантия на все работы',
    'Фиксированная цена в договоре'
  ],
  urgencyText = 'Акция действует до конца месяца!',
  contactInfo = {
    phone: '+7 (495) 123-45-67',
    email: 'info@remont.ru',
    workingHours: 'Ежедневно с 9:00 до 21:00'
  },
  backgroundColor = '#2c3e50',
  accentColor = '#ff6b35',
  textColor = 'white',
  sx = {}
}) => {

  // Вариант A: Форма + преимущества
  const VariantA = () => (
    <Box id={id} sx={{ py: 8, bgcolor: backgroundColor, color: textColor, ...sx }}>
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          {/* Левая часть - текст и преимущества */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Typography
                variant="h3"
                component="h2"
                sx={{
                  mb: 3,
                  fontWeight: 'bold',
                  color: textColor
                }}
              >
                {title}
              </Typography>
              
              <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
                {subtitle}
              </Typography>

              <List sx={{ mb: 4 }}>
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <ListItem sx={{ px: 0 }}>
                      <ListItemIcon>
                        <CheckCircleIcon sx={{ color: accentColor }} />
                      </ListItemIcon>
                      <ListItemText 
                        primary={benefit}
                        sx={{ '& .MuiListItemText-primary': { color: textColor } }}
                      />
                    </ListItem>
                  </motion.div>
                ))}
              </List>

              <Box sx={{ 
                p: 2, 
                bgcolor: accentColor, 
                borderRadius: 2, 
                textAlign: 'center',
                mb: 3
              }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'white' }}>
                  🔥 {urgencyText}
                </Typography>
              </Box>

              {/* Контактная информация */}
              <Stack spacing={2}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <PhoneIcon sx={{ mr: 2, color: accentColor }} />
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    {contactInfo.phone}
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <AccessTimeIcon sx={{ mr: 2, color: accentColor }} />
                  <Typography variant="body1">
                    {contactInfo.workingHours}
                  </Typography>
                </Box>
              </Stack>
            </motion.div>
          </Grid>

          {/* Правая часть - форма */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card sx={{ p: 4, boxShadow: 6 }}>
                <CTAForm 
                  variant="A"
                  title="Получить консультацию"
                  buttonText="Получить консультацию"
                  buttonColor={accentColor}
                  showCheckbox={true}
                  checkboxText="Согласен на обработку персональных данных"
                />
              </Card>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );

  // Вариант B: Центрированный блок с акцентом на срочность
  const VariantB = () => (
    <Box sx={{ py: 8, bgcolor: backgroundColor, color: textColor, ...sx }}>
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card sx={{ 
            p: 6, 
            textAlign: 'center', 
            boxShadow: 8,
            position: 'relative',
            overflow: 'hidden'
          }}>
            {/* Декоративные элементы */}
            <Box
              sx={{
                position: 'absolute',
                top: -50,
                right: -50,
                width: 150,
                height: 150,
                borderRadius: '50%',
                bgcolor: `${accentColor}20`
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                bottom: -30,
                left: -30,
                width: 100,
                height: 100,
                borderRadius: '50%',
                bgcolor: `${accentColor}10`
              }}
            />

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
            
            <Typography variant="h6" sx={{ mb: 4, color: '#666' }}>
              {subtitle}
            </Typography>

            {/* Срочность */}
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Chip 
                label={urgencyText}
                sx={{ 
                  mb: 4,
                  bgcolor: accentColor,
                  color: 'white',
                  fontSize: '1.1rem',
                  py: 3,
                  px: 2,
                  '& .MuiChip-label': { px: 2 }
                }}
              />
            </motion.div>

            {/* Преимущества в строку */}
            <Grid container spacing={2} sx={{ mb: 4 }}>
              {benefits.map((benefit, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <CheckCircleIcon sx={{ color: accentColor, mr: 1 }} />
                      <Typography variant="body1" sx={{ color: '#333' }}>
                        {benefit}
                      </Typography>
                    </Box>
                  </motion.div>
                </Grid>
              ))}
            </Grid>

            {/* Форма */}
            <Box sx={{ maxWidth: 400, mx: 'auto' }}>
              <CTAForm 
                variant="B"
                title=""
                buttonText="Получить консультацию бесплатно"
                buttonColor={accentColor}
                showCheckbox={true}
              />
            </Box>

            <Divider sx={{ my: 3 }} />

            {/* Контакты */}
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} justifyContent="center">
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <PhoneIcon sx={{ mr: 1, color: accentColor }} />
                <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#333' }}>
                  {contactInfo.phone}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <AccessTimeIcon sx={{ mr: 1, color: accentColor }} />
                <Typography variant="body2" sx={{ color: '#666' }}>
                  {contactInfo.workingHours}
                </Typography>
              </Box>
            </Stack>
          </Card>
        </motion.div>
      </Container>
    </Box>
  );

  // Вариант C: Разделенный блок с альтернативными способами связи
  const VariantC = () => (
    <Box sx={{ py: 8, bgcolor: backgroundColor, color: textColor, ...sx }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          component="h2"
          sx={{
            textAlign: 'center',
            mb: 2,
            fontWeight: 'bold',
            color: textColor
          }}
        >
          {title}
        </Typography>
        
        <Typography variant="h6" sx={{ textAlign: 'center', mb: 6, opacity: 0.9 }}>
          {subtitle}
        </Typography>

        <Grid container spacing={4}>
          {/* Основная форма */}
          <Grid item xs={12} md={8}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card sx={{ p: 4, height: '100%', boxShadow: 4 }}>
                <Typography variant="h5" sx={{ mb: 3, fontWeight: 'bold', color: '#2c3e50' }}>
                  Оставьте заявку
                </Typography>
                
                <CTAForm 
                  variant="C"
                  title=""
                  buttonText="Отправить заявку"
                  buttonColor={accentColor}
                  showCheckbox={true}
                />

                <Box sx={{ mt: 3, p: 2, bgcolor: `${accentColor}10`, borderRadius: 2 }}>
                  <Typography variant="body2" sx={{ color: '#666', textAlign: 'center' }}>
                    ⚡ Ответим в течение 15 минут в рабочее время
                  </Typography>
                </Box>
              </Card>
            </motion.div>
          </Grid>

          {/* Альтернативные способы связи */}
          <Grid item xs={12} md={4}>
            <Stack spacing={3}>
              {/* Срочная связь */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Paper sx={{ p: 3, textAlign: 'center', bgcolor: accentColor, color: 'white' }}>
                  <PhoneIcon sx={{ fontSize: '2rem', mb: 1 }} />
                  <Typography variant="h6" sx={{ mb: 1, fontWeight: 'bold' }}>
                    Срочная связь
                  </Typography>
                  <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold' }}>
                    {contactInfo.phone}
                  </Typography>
                  <Button 
                    variant="contained" 
                    sx={{ 
                      bgcolor: 'white', 
                      color: accentColor,
                      '&:hover': { bgcolor: '#f5f5f5' }
                    }}
                    href={`tel:${contactInfo.phone}`}
                  >
                    Позвонить сейчас
                  </Button>
                </Paper>
              </motion.div>

              {/* Email */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Paper sx={{ p: 3, textAlign: 'center' }}>
                  <EmailIcon sx={{ fontSize: '2rem', mb: 1, color: accentColor }} />
                  <Typography variant="h6" sx={{ mb: 1, fontWeight: 'bold', color: '#2c3e50' }}>
                    Написать на почту
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 2, color: '#666' }}>
                    {contactInfo.email}
                  </Typography>
                  <Button 
                    variant="outlined" 
                    sx={{ 
                      borderColor: accentColor, 
                      color: accentColor,
                      '&:hover': { 
                        borderColor: accentColor, 
                        bgcolor: `${accentColor}10` 
                      }
                    }}
                    href={`mailto:${contactInfo.email}`}
                  >
                    Отправить письмо
                  </Button>
                </Paper>
              </motion.div>

              {/* Преимущества */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <Paper sx={{ p: 3 }}>
                  <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold', color: '#2c3e50' }}>
                    Почему выбирают нас
                  </Typography>
                  <List dense>
                    {benefits.map((benefit, index) => (
                      <ListItem key={index} sx={{ px: 0 }}>
                        <ListItemIcon sx={{ minWidth: 30 }}>
                          <CheckCircleIcon sx={{ color: accentColor, fontSize: '1.2rem' }} />
                        </ListItemIcon>
                        <ListItemText 
                          primary={benefit}
                          sx={{ 
                            '& .MuiListItemText-primary': { 
                              fontSize: '0.9rem',
                              color: '#666'
                            } 
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Paper>
              </motion.div>

              {/* Время работы */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <Paper sx={{ p: 2, textAlign: 'center', bgcolor: '#f8f9fa' }}>
                  <AccessTimeIcon sx={{ color: accentColor, mb: 1 }} />
                  <Typography variant="body2" sx={{ color: '#666' }}>
                    {contactInfo.workingHours}
                  </Typography>
                </Paper>
              </motion.div>
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
