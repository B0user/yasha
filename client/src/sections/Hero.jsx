import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-bg" />
      <div className="container hero-inner">
        <motion.h1
          className="hero-title"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          ООО «УЗНУР-ПРОДЖЕКТ»
        </motion.h1>
        <motion.p
          className="hero-subtitle"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.08 }}
        >
          Разработка проектной и рабочей документации, строительство, авторский надзор
        </motion.p>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
          <a className="btn" href="#contacts">Связаться с нами</a>
        </motion.div>
      </div>
    </section>
  );
}


