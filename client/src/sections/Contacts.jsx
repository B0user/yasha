import { motion } from 'framer-motion';

export function Contacts() {
  const MAIN_DIRECTOR_EMAIL = 'sfera_krs@mail.ru';
  const SECOND_DIRECTOR_EMAIL = 'yashar.nuriev@mail.ru';
  return (
    <section className="section section-contrast" id="contacts">
      <div className="container">
        <motion.h2 className="section-title" initial={{ y: 12, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }}>Работайте с нами</motion.h2>
        <div className="grid grid-2">
          
          <motion.div className="card" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            
            <p><strong>Адрес:</strong> 123007, Москва, ул. 5-я Магистральная, д.12</p>
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
            <p><strong>Основатель компании</strong></p>
            <p>Нуриев Яшар Рахимжонович</p>
            <p><strong>Телефон:</strong> <a href="tel:+79771284160">+7 (977) 128-41-60</a></p>
            <p><strong>E-mail:</strong> {SECOND_DIRECTOR_EMAIL}</p>
            <hr />
            <p><strong>Директор по развитию бизнеса</strong></p>
            <p>Маеров Александр Сергеевич</p>
            <p><strong>Телефон:</strong> <a href="tel:+79272822430">+7 (927) 282-24-30</a></p>
            <p><strong>E-mail:</strong> <a href="mailto:sfera_krs@mail.ru">sfera_krs@mail.ru</a></p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


