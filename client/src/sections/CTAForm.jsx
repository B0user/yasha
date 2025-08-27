import { motion } from 'framer-motion';
import { useState } from 'react';
import { TextField, Button, Stack } from '@mui/material';

export function CTAForm() {
  const MAIN_DIRECTOR_EMAIL = 'sfera_krs@mail.ru';
  const SECOND_DIRECTOR_EMAIL = 'yashar.nuriev@mail.ru';

  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });

  const updateField = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = 'Заявка с сайта';
    const body = [
      `Имя: ${form.name}`,
      `Телефон: ${form.phone}`,
      `Email: ${form.email}`,
      '',
      form.message,
    ].join('\n');
    const mailto = `mailto:${MAIN_DIRECTOR_EMAIL}?cc=${encodeURIComponent(SECOND_DIRECTOR_EMAIL)}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  };

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
              <p className="muted">Заявка откроется в вашей почте</p>
            </Stack>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

 

