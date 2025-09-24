import React, { useState } from 'react';
import {
  Box,
  Button,
  TextField,
  Typography,
  Card,
  CardContent,
  Checkbox,
  FormControlLabel,
  CircularProgress
} from '@mui/material';
import { motion } from 'framer-motion';
import { createFieldUpdateHandler, createSubmitHandler } from '../../utils/leadHandlers';

// 1. CTA-форма (короткая заявка) - 3 варианта
export const CTAForm = ({ 
  variant = 'A', 
  title = 'Получить бесплатную смету',
  buttonText = 'Получить бесплатную смету',
  buttonColor = '#ff6b35',
  namePlaceholder = 'Ваше имя',
  phonePlaceholder = '+7 (___) ___-__-__',
  checkboxText = 'Хочу замер бесплатно',
  formType = 'quick',
  showNotification,
  sx = {}
}) => {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    checkbox: false
  });
  const [loading, setLoading] = useState(false);

  const updateField = createFieldUpdateHandler(setForm, form);
  const handleSubmit = createSubmitHandler(form, setForm, formType, showNotification, setLoading);

  const handleCheckboxChange = (e) => {
    setForm({ ...form, checkbox: e.target.checked });
  };

  // Вариант A: Имя + Телефон + кнопка
  const VariantA = () => (
    <Box component="form" onSubmit={handleSubmit}>
      <TextField
        name="name"
        label="Имя"
        value={form.name}
        onChange={updateField}
        placeholder={namePlaceholder}
        required
        fullWidth
        variant="outlined"
        sx={{ mb: 2 }}
      />
      <TextField
        name="phone"
        label="Телефон"
        type="tel"
        value={form.phone}
        onChange={updateField}
        placeholder={phonePlaceholder}
        required
        fullWidth
        variant="outlined"
        sx={{ mb: 3 }}
      />
      <Button
        type="submit"
        variant="contained"
        fullWidth
        disabled={loading}
        sx={{
          py: 1.5,
          bgcolor: buttonColor,
          fontSize: '1.1rem',
          fontWeight: 'bold',
          '&:hover': { 
            bgcolor: buttonColor,
            filter: 'brightness(0.9)'
          }
        }}
      >
        {loading ? <CircularProgress size={24} color="inherit" /> : buttonText}
      </Button>
    </Box>
  );

  // Вариант B: Только телефон + кнопка "Перезвоните мне"
  const VariantB = () => (
    <Box component="form" onSubmit={handleSubmit}>
      <TextField
        name="phone"
        label="Телефон"
        type="tel"
        value={form.phone}
        onChange={updateField}
        placeholder={phonePlaceholder}
        required
        fullWidth
        variant="outlined"
        sx={{ mb: 3 }}
      />
      <Button
        type="submit"
        variant="contained"
        fullWidth
        disabled={loading}
        sx={{
          py: 1.5,
          bgcolor: buttonColor,
          fontSize: '1.1rem',
          fontWeight: 'bold',
          '&:hover': { 
            bgcolor: buttonColor,
            filter: 'brightness(0.9)'
          }
        }}
      >
        {loading ? <CircularProgress size={24} color="inherit" /> : buttonText}
      </Button>
    </Box>
  );

  // Вариант C: Имя + Телефон + чекбокс
  const VariantC = () => (
    <Box component="form" onSubmit={handleSubmit}>
      <TextField
        name="name"
        label="Имя"
        value={form.name}
        onChange={updateField}
        placeholder={namePlaceholder}
        required
        fullWidth
        variant="outlined"
        sx={{ mb: 2 }}
      />
      <TextField
        name="phone"
        label="Телефон"
        type="tel"
        value={form.phone}
        onChange={updateField}
        placeholder={phonePlaceholder}
        required
        fullWidth
        variant="outlined"
        sx={{ mb: 2 }}
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={form.checkbox}
            onChange={handleCheckboxChange}
            sx={{ color: buttonColor }}
          />
        }
        label={checkboxText}
        sx={{ mb: 3 }}
      />
      <Button
        type="submit"
        variant="contained"
        fullWidth
        disabled={loading}
        sx={{
          py: 1.5,
          bgcolor: buttonColor,
          fontSize: '1.1rem',
          fontWeight: 'bold',
          '&:hover': { 
            bgcolor: buttonColor,
            filter: 'brightness(0.9)'
          }
        }}
      >
        {loading ? <CircularProgress size={24} color="inherit" /> : buttonText}
      </Button>
    </Box>
  );

  const variants = {
    A: VariantA,
    B: VariantB,
    C: VariantC
  };

  const SelectedVariant = variants[variant] || VariantA;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <Card sx={{ p: 4, boxShadow: 3, ...sx }}>
        <Typography 
          variant="h5" 
          sx={{ 
            mb: 3, 
            color: '#2c3e50', 
            fontWeight: 'bold', 
            textAlign: 'center' 
          }}
        >
          {title}
        </Typography>
        <SelectedVariant />
      </Card>
    </motion.div>
  );
};
