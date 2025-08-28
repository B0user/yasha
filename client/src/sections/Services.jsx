import { motion } from 'framer-motion';
import { FaDraftingCompass, FaTools, FaHardHat, FaClipboardCheck } from 'react-icons/fa';

const services = [
  {
    icon: <FaDraftingCompass size={28} />,
    title: 'Проектная документация',
    text: 'Архитектурные, конструктивные, инженерные решения',
  },
  {
    icon: <FaTools size={28} />,
    title: 'Разработка КМ и КМД',
    text: 'Металлоконструкции, светопрозрачные конструкции',
  },
  {
    icon: <FaHardHat size={28} />,
    title: 'Строительно-монтажные работы',
    text: 'Фасады, светопрозрачные конструкции',
  },
  {
    icon: <FaClipboardCheck size={28} />,
    title: 'Авторский надзор',
    text: 'Контроль соответствия проекту и стандартам',
  },
];

export function Services() {
  return (
    <section className="section section-alt" id="services">
      <div className="container">
        <motion.h2 className="section-title" initial={{ y: 12, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }}>Наши услуги</motion.h2>
        <div className="cards">
          {services.map((s, idx) => (
            <motion.div
              key={s.title}
              className="card"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
            >
              <div style={{ color: 'var(--color-accent)' }}>{s.icon}</div>
              <div className="card-title">{s.title}</div>
              <div className="muted">{s.text}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


