import { motion } from 'framer-motion';

const partners = [
  { name: 'ГК «Самолет»', img: 'https://placehold.co/200x80/edf2f7/0a2540?text=%D0%A1%D0%B0%D0%BC%D0%BE%D0%BB%D0%B5%D1%82' },
  { name: 'ЗИАС', img: 'https://placehold.co/200x80/e2e8f0/0a2540?text=%D0%97%D0%98%D0%90%D0%A1' },
  { name: 'Профметалл', img: 'https://placehold.co/200x80/e2e8f0/0a2540?text=%D0%9F%D1%80%D0%BE%D1%84%D0%BC%D0%B5%D1%82%D0%B0%D0%BB%D0%BB' },
];

export function Partners() {
  return (
    <section className="section" id="partners">
      <div className="container">
        <motion.h2 className="section-title" initial={{ y: 12, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }}>Наши партнёры</motion.h2>
        <div className="partners">
          {partners.map((p) => (
            <motion.div key={p.name} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              <img src={p.img} alt={p.name} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


