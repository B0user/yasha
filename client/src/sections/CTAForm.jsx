import { motion } from 'framer-motion';
import { useState } from 'react';
import { TextField, Button, Stack } from '@mui/material';
import {
  createFieldUpdateHandler,
  createSubmitHandler
} from '../utils/leadHandlers';

export function CTAForm() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });

  const updateField = createFieldUpdateHandler(setForm);
  const handleSubmit = createSubmitHandler(form, 'Заявка с сайта');

  return (
    <section className="section" id="cta">
      <div className="container">
        <motion.h2 className="section-title" initial={{ y: 12, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }}>Оставить заявку</motion.h2>
        <motion.div className="card" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <form onSubmit={handleSubmit}>
            <Stack spacing={1}>
              <TextField
                name="name"
                label="Имя"
                value={form.name}
                onChange={updateField}
                placeholder="Ваше имя"
                required
                fullWidth
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
              />
              <TextField
                name="message"
                label="Сообщение"
                value={form.message}
                onChange={updateField}
                placeholder="Кратко опишите задачу"
                multiline
                minRows={4}
                fullWidth
              />
              <Button variant="contained" type="submit">Отправить заявку</Button>
            </Stack>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

 

