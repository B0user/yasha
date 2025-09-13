import { motion } from 'framer-motion';
import partner1 from '../assets/partners/partner1.webp';
import partner2 from '../assets/partners/partner2.webp';
import partner3 from '../assets/partners/partner3.webp';
import partner4 from '../assets/partners/partner4.webp';
import partner5 from '../assets/partners/partner5.webp';
import partner6 from '../assets/partners/partner6.webp';
import partner7 from '../assets/partners/partner7.webp';
import partner8 from '../assets/partners/partner8.webp';
import partner9 from '../assets/partners/partner9.webp';
import partner10 from '../assets/partners/partner10.webp';

const partners = [
  { name: 'Партнёр 1', img: partner1 },
  { name: 'Партнёр 2', img: partner2 },
  { name: 'Партнёр 3', img: partner3 },
  { name: 'Партнёр 4', img: partner4 },
  { name: 'Партнёр 5', img: partner5 },
  { name: 'Партнёр 6', img: partner6 },
  { name: 'Партнёр 7', img: partner7 },
  { name: 'Партнёр 8', img: partner8 },
  { name: 'Партнёр 9', img: partner9 },
  { name: 'Партнёр 10', img: partner10 },
];

export default function Partners() {
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


