import { motion } from 'framer-motion';
import ongoing1 from '../assets/ongoingproject1.png';
import ongoing2 from '../assets/ongoingproject2.png';
import ongoing3 from '../assets/ongoingproject3.png';
import ongoing4 from '../assets/ongoingproject4.png';
import ongoing5 from '../assets/ongoingproject5.png';

const active = [
  { title: 'Строительство верфи', subtitle: 'КМ и КМД НВФ, заказчик: Профметалл', img: ongoing1 },
  { title: 'Имущественный комплекс №8', subtitle: 'КМ, КМД, заказчик: Профметалл', img: ongoing2 },
  { title: 'ЖК «Афи парк Вороцновский»', subtitle: 'КМ и КМД НВФ, заказчик: Профметалл', img: ongoing3 },
  { title: 'Корпус инфекционного отделения ЯНАО', subtitle: 'Раскладка облицовки фасада', img: ongoing4 },
  { title: 'Тарко-Салинская ЦРБ', subtitle: 'Раскладка облицовки фасада', img: ongoing5 },
];

export function ActiveProjects() {
  return (
    <section className="section" id="active-projects">
      <div className="container">
        <motion.h2 className="section-title" initial={{ y: 12, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }}>Проектирование — действующие</motion.h2>
        <div className="gallery">
          {active.map((p, idx) => (
            <motion.div key={p.title} className="gallery-card" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.05 }}>
              <img src={p.img} alt={p.title} />
              <div className="info">
                <div className="card-title">{p.title}</div>
                <div className="muted">{p.subtitle}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


