import { motion } from 'framer-motion';
import partner1 from '../assets/partners/partner1.png';
import partner2 from '../assets/partners/partner2.png';
import partner3 from '../assets/partners/partner3.png';
import partner4 from '../assets/partners/partner4.png';
import partner5 from '../assets/partners/partner5.png';
import partner6 from '../assets/partners/partner6.png';
import partner7 from '../assets/partners/partner7.png';
import partner8 from '../assets/partners/partner8.png';

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
    <section className="section section-dark" id="partners">
      <div className="container">
        <motion.h2 className="section-title" initial={{ y: 12, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }}>Наши партнёры</motion.h2>
        <div className="partners-marquee">
          <div className="partners-track">
            {[...partners, ...partners].map((p, idx) => (
              <div className="partner-item" key={`${p.name}-${idx}`}>
                <img src={p.img} alt={p.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


