import { motion } from 'framer-motion';
import partner1 from '../assets/partner1.png';
import partner2 from '../assets/partner2.png';
import partner3 from '../assets/partner3.png';
import partner4 from '../assets/partner4.png';
import partner5 from '../assets/partner5.png';
import partner6 from '../assets/partner6.png';
import partner7 from '../assets/partner7.png';
import partner8 from '../assets/partner8.png';

const partners = [
  { name: 'Партнёр 1', img: partner1 },
  { name: 'Партнёр 2', img: partner2 },
  { name: 'Партнёр 3', img: partner3 },
  { name: 'Партнёр 4', img: partner4 },
  { name: 'Партнёр 5', img: partner5 },
  { name: 'Партнёр 6', img: partner6 },
  { name: 'Партнёр 7', img: partner7 },
  { name: 'Партнёр 8', img: partner8 },
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


