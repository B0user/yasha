import React, { useState } from 'react';
import {
  Box,
  Button,
  TextField,
  Typography,
  Card,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  Slider,
  CircularProgress
} from '@mui/material';
import { motion } from 'framer-motion';
import { createFieldUpdateHandler, createSubmitHandler } from '../../utils/leadHandlers';

// 2. Длинная форма (детальная заявка) - 3 варианта
export const DetailedForm = ({ 
  variant = 'A',
  title = 'Расскажите о вашем проекте',
  buttonText = 'Отправить заявку',
  buttonColor = '#ff6b35',
  description = 'Мы перезвоним в течение 30 минут',
  services = ['Ремонт подъезда', 'Инженерные сети', 'Фасадные работы'],
  objectTypes = ['Жилой дом', 'Офисное здание', 'Торговый центр', 'Промышленный объект'],
  formType = 'extended',
  showNotification,
  sx = {}
}) => {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    description: '',
    objectType: '',
    timeline: '',
    budget: [100000, 1000000],
    service: ''
  });
  const [loading, setLoading] = useState(false);

  const updateField = createFieldUpdateHandler(setForm, form);
  const handleSubmit = createSubmitHandler(form, setForm, formType, showNotification, setLoading);

  const handleSelectChange = (field) => (e) => {
    setForm({ ...form, [field]: e.target.value });
  };

  const handleBudgetChange = (event, newValue) => {
    setForm({ ...form, budget: newValue });
  };

  // Вариант A: Стандартная форма
  const VariantA = () => (
    <Box component="form" onSubmit={handleSubmit}>
      <TextField
        name="name"
        label="Ваше имя"
        value={form.name}
        onChange={updateField}
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
        required
        fullWidth
        variant="outlined"
        sx={{ mb: 2 }}
      />
      <TextField
        name="email"
        label="Email"
        type="email"
        value={form.email}
        onChange={updateField}
        fullWidth
        variant="outlined"
        sx={{ mb: 2 }}
      />
      <TextField
        name="description"
        label="Описание задачи"
        value={form.description}
        onChange={updateField}
        multiline
        rows={4}
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
      {description && (
        <Typography variant="body2" sx={{ mt: 2, textAlign: 'center', color: '#666' }}>
          {description}
        </Typography>
      )}
    </Box>
  );

  // Вариант B: С селектами и слайдером бюджета
  const VariantB = () => (
    <Box component="form" onSubmit={handleSubmit}>
      <TextField
        name="name"
        label="Ваше имя"
        value={form.name}
        onChange={updateField}
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
        required
        fullWidth
        variant="outlined"
        sx={{ mb: 2 }}
      />
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>Вид объекта</InputLabel>
        <Select
          value={form.objectType}
          onChange={handleSelectChange('objectType')}
          label="Вид объекта"
        >
          {objectTypes.map((type, index) => (
            <MenuItem key={index} value={type}>{type}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
        name="timeline"
        label="Желаемые сроки"
        value={form.timeline}
        onChange={updateField}
        fullWidth
        variant="outlined"
        sx={{ mb: 3 }}
      />
      <Typography gutterBottom>Бюджет проекта</Typography>
      <Slider
        value={form.budget}
        onChange={handleBudgetChange}
        valueLabelDisplay="auto"
        min={50000}
        max={5000000}
        step={50000}
        valueLabelFormat={(value) => `${(value / 1000).toFixed(0)}к ₽`}
        sx={{ mb: 3, color: buttonColor }}
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
      {description && (
        <Typography variant="body2" sx={{ mt: 2, textAlign: 'center', color: '#666' }}>
          {description}
        </Typography>
      )}
    </Box>
  );

  // Вариант C: С радиокнопками услуг
  const VariantC = () => (
    <Box component="form" onSubmit={handleSubmit}>
      <TextField
        name="name"
        label="Ваше имя"
        value={form.name}
        onChange={updateField}
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
        required
        fullWidth
        variant="outlined"
        sx={{ mb: 3 }}
      />
      <FormControl component="fieldset" sx={{ mb: 3 }}>
        <FormLabel component="legend">Выберите услугу</FormLabel>
        <RadioGroup
          value={form.service}
          onChange={handleSelectChange('service')}
        >
          {services.map((service, index) => (
            <FormControlLabel 
              key={index}
              value={service} 
              control={<Radio sx={{ color: buttonColor }} />} 
              label={service} 
            />
          ))}
        </RadioGroup>
      </FormControl>
      <TextField
        name="description"
        label="Комментарий"
        value={form.description}
        onChange={updateField}
        multiline
        rows={3}
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
      {description && (
        <Typography variant="body2" sx={{ mt: 2, textAlign: 'center', color: '#666' }}>
          {description}
        </Typography>
      )}
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
