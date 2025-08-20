import { motion } from 'framer-motion';
import { FaCheckCircle, FaClock, FaCertificate, FaUserTie } from 'react-icons/fa';

const benefits = [
  { icon: <FaCheckCircle size={26} />, title: 'Более 5 лет', text: 'Успешной работы' },
  { icon: <FaClock size={26} />, title: 'Сроки', text: 'Качество и своевременность' },
  { icon: <FaCertificate size={26} />, title: 'Стандарты', text: 'Соответствие нормам' },
  { icon: <FaUserTie size={26} />, title: 'Индивидуально', text: 'Под задачи клиента' },
];

export function Benefits() {
  return (
    <section className="section" id="benefits">
      <div className="container">
        <motion.h2 className="section-title" initial={{ y: 12, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }}>Почему выбирают нас?</motion.h2>
        <div className="cards">
          {benefits.map((b, idx) => (
            <motion.div key={b.title} className="card" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.05 }}>
              <div style={{ color: 'var(--color-accent)' }}>{b.icon}</div>
              <div className="card-title">{b.title}</div>
              <div className="muted">{b.text}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


