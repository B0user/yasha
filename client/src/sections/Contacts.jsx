import { motion } from 'framer-motion';

export function Contacts() {
  return (
    <section className="section" id="contacts">
      <div className="container">
        <motion.h2 className="section-title" initial={{ y: 12, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }}>Работайте с нами</motion.h2>
        <div className="grid grid-2">
          <motion.div className="card" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p><strong>Адрес:</strong> 123007, Москва, ул. 5-я Магистральная, д.12</p>
            <p><strong>Телефон:</strong> <a href="tel:+79771284160">+7 (977) 128-41-60</a></p>
            <p><strong>E-mail:</strong> <a href="mailto:yashar.nuriev@mail.ru">yashar.nuriev@mail.ru</a></p>
            <div style={{ display: 'flex', gap: 12, marginTop: 12 }}>
              <a className="btn" href="mailto:yashar.nuriev@mail.ru">Написать нам</a>
              <a className="btn btn-outline" href="#hero">Наверх</a>
            </div>
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
        </div>
      </div>
    </section>
  );
}


