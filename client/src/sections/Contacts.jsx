import { motion } from 'framer-motion';
import { useState } from 'react';

export function Contacts() {
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
    <section className="section" id="contacts">
      <div className="container">
        <motion.h2 className="section-title" initial={{ y: 12, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }}>Работайте с нами</motion.h2>
        <div className="grid grid-2">
          <motion.div className="card" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p><strong>Адрес:</strong> 123007, Москва, ул. 5-я Магистральная, д.12</p>
            <p><strong>Телефон:</strong> <a href="tel:+79771284160">+7 (977) 128-41-60</a></p>
            <p><strong>E-mail:</strong> <a href={`mailto:${MAIN_DIRECTOR_EMAIL}?cc=${encodeURIComponent(SECOND_DIRECTOR_EMAIL)}&subject=${encodeURIComponent('Запрос с сайта')}`}>{MAIN_DIRECTOR_EMAIL}</a></p>
            <p><strong>Копия:</strong> {SECOND_DIRECTOR_EMAIL}</p>
            <div style={{ display: 'flex', gap: 12, marginTop: 12 }}>
              <a className="btn" href={`mailto:${MAIN_DIRECTOR_EMAIL}?cc=${encodeURIComponent(SECOND_DIRECTOR_EMAIL)}&subject=${encodeURIComponent('Запрос с сайта')}`}>Написать нам</a>
              <a className="btn btn-outline" href="#hero">Наверх</a>
            </div>
          </motion.div>
          <motion.div className="card" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p><strong>Директор по развитию бизнеса</strong></p>
            <p>Маеров Александр Сергеевич</p>
            <p><strong>Телефон:</strong> <a href="tel:+79272822430">+7 (927) 282-24-30</a></p>
            <p><strong>E-mail:</strong> <a href="mailto:sfera_krs@mail.ru">sfera_krs@mail.ru</a></p>
          </motion.div>
          <motion.div className="card" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div style={{ position: 'relative', width: '100%', paddingBottom: '56.25%', borderRadius: 8, overflow: 'hidden' }}>
              <iframe
                title="map"
                src="https://www.google.com/maps?q=123007, Москва, ул. 5-я Магистральная, д.12&output=embed"
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0 }}
                loading="lazy"
                allowFullScreen
              />
            </div>
          </motion.div>
          <motion.div className="card" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <form onSubmit={handleSubmit} style={{ display: 'grid', gap: 8 }}>
              <label>
                Имя
                <input name="name" type="text" value={form.name} onChange={updateField} placeholder="Ваше имя" required style={{ width: '100%' }} />
              </label>
              <label>
                Телефон
                <input name="phone" type="tel" value={form.phone} onChange={updateField} placeholder="Ваш телефон" required style={{ width: '100%' }} />
              </label>
              <label>
                Email
                <input name="email" type="email" value={form.email} onChange={updateField} placeholder="Ваш e-mail" required style={{ width: '100%' }} />
              </label>
              <label>
                Сообщение
                <textarea name="message" rows={4} value={form.message} onChange={updateField} placeholder="Кратко опишите задачу" style={{ width: '100%' }} />
              </label>
              <button className="btn" type="submit">Отправить заявку</button>
              <p className="muted">Заявка откроется в вашей почте и уйдёт на основной e-mail с копией второму директору.</p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


