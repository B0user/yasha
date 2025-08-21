import { motion } from 'framer-motion';
import imgOstafyevo from '../assets/Остафьево.png';
import imgSputnik from '../assets/СПУТНИК.png';
import imgCenter from '../assets/Центр инноваций и импортозамещения.png';
import imgRudnevo from '../assets/Промзона «Руднево».png';
import imgHouses from '../assets/Жилые дома.png';
import imgNovayaRazvilka from '../assets/ЖК «НОВАЯ РАЗВИЛКА».png';
import imgKindergarten from '../assets/Детское дошкольное учреждение .png';
import ongoing1 from '../assets/ongoingproject1.png';
import ongoing2 from '../assets/ongoingproject2.png';
import ongoing3 from '../assets/ongoingproject3.png';
import ongoing4 from '../assets/ongoingproject4.png';
import ongoing5 from '../assets/ongoingproject5.png';

const completed = [
  { title: 'ЖК «Остафьево»', subtitle: 'КМ НВФ, заказчик: ГК «Самолет»', img: imgOstafyevo },
  { title: 'ЖК «СПУТНИК»', subtitle: 'КМ НВФ, заказчик: ГК «Самолет»', img: imgSputnik },
  { title: 'Центр инноваций и импортозамещения', subtitle: 'КМ, фахверки, заказчик: ГК «Самолет»', img: imgCenter },
  { title: 'Промзона «Руднево»', subtitle: 'КМ, КМД фасадов, заказчик: ЗИАС', img: imgRudnevo },
  { title: 'Жилые дома', subtitle: 'Разработка КМ НВФ, заказчик: ЗИАС', img: imgHouses },
  { title: 'ЖК «Новая Развилка»', subtitle: 'Светопрозрачные конструкции', img: imgNovayaRazvilka },
  { title: 'Детский сад', subtitle: 'Светопрозрачные конструкции', img: imgKindergarten },
  { title: 'Строительство верфи', subtitle: 'КМ и КМД НВФ, заказчик: Профметалл', img: ongoing1 },
  { title: 'Имущественный комплекс №8', subtitle: 'КМ, КМД, заказчик: Профметалл', img: ongoing2 },
  { title: 'ЖК «Афи парк Вороцновский»', subtitle: 'КМ и КМД НВФ, заказчик: Профметалл', img: ongoing3 },
  { title: 'Корпус инфекционного отделения ЯНАО', subtitle: 'Раскладка облицовки фасада', img: ongoing4 },
  { title: 'Тарко-Салинская ЦРБ', subtitle: 'Раскладка облицовки фасада', img: ongoing5 },
];

export function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <motion.h2 className="section-title" initial={{ y: 12, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }}>Проектирование</motion.h2>
        <div className="gallery">
          {completed.map((p, idx) => (
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


