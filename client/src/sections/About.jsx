import { motion } from 'framer-motion';
import aboutImg from '../assets/about.png';

export function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <motion.h2 className="section-title" initial={{ y: 12, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }}>Кто мы?</motion.h2>
        <motion.p className="section-subtitle" initial={{ y: 12, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.05 }}>
          ООО «УЗНУР-ПРОДЖЕКТ» – компания полного цикла, специализирующаяся на проектировании и строительстве объектов промышленного и жилого сектора.
        </motion.p>
        
        <div className="grid grid-2">
        <motion.img
          src={aboutImg}
          alt="О нас"
          className="about-image"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        />
        <motion.div className="card" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="muted">Основана: 2023</p>
            <p className="muted">География проектов: Москва, Московская область</p>
            <p className="muted">Основные направления: проектная документация, строительные работы, авторский надзор.</p>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}


