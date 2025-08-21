import { motion } from 'framer-motion';
import beforeInno1 from '../assets/Инновационный лабораторно-промышленный комплекс номер 5 before1.jpeg';
import beforeInno2 from '../assets/Инновационный лабораторно-промышленный комплекс номер 5 before2.jpeg';
import afterInno1 from '../assets/Инновационный лабораторно-промышленный комплекс номер 5 after1.jpeg';
import afterInno2 from '../assets/Инновационный лабораторно-промышленный комплекс номер 5 after2.jpeg';

import beforeHydro1 from '../assets/Устройство гидроизоляции стилобатной части здания многоквартирного жилого дома before1.jpeg';
import beforeHydro2 from '../assets/Устройство гидроизоляции стилобатной части здания многоквартирного жилого дома before2.jpeg';
import afterHydro1 from '../assets/Устройство гидроизоляции стилобатной части здания многоквартирного жилого дома after1.jpeg';
import afterHydro2 from '../assets/Устройство гидроизоляции стилобатной части здания многоквартирного жилого дома after2.jpeg';

import beforeRepair1 from '../assets/Капитальный ремонт 3-х подъездов многоквартирного жилого дома before1.jpeg';
import beforeRepair2 from '../assets/Капитальный ремонт 3-х подъездов многоквартирного жилого дома before2.jpeg';
import afterRepair1 from '../assets/Капитальный ремонт 3-х подъездов многоквартирного жилого дома after 1.jpeg';
import afterRepair2 from '../assets/Капитальный ремонт 3-х подъездов многоквартирного жилого дома after 2.jpeg';

const smrProjects = [
  {
    title: 'Инновационный лабораторно-промышленный комплекс №5',
    description:
      'Разработка рабочей документации разделов КМ и КМД с последующим монтажом навесного вентилируемого фасада. Адрес: г. Москва, Зеленоград, площадка Алабушево, ул. Конструктора Лукина, 14.',
    pairs: [
      { before: beforeInno1, after: afterInno1 },
      { before: beforeInno2, after: afterInno2 },
    ],
  },
  {
    title: 'Гидроизоляция стилобата МКД (завершено)',
    description:
      'Устройство гидроизоляции стилобатной части здания многоквартирного жилого дома. Адрес: г. Москва, ул. Союзная, д. 22.',
    pairs: [
      { before: beforeHydro1, after: afterHydro1 },
      { before: beforeHydro2, after: afterHydro2 },
    ],
  },
  {
    title: 'Капитальный ремонт 3-х подъездов МКД',
    description:
      'Капитальный ремонт 3-х подъездов многоквартирного жилого дома. Адрес: г. Москва, пр-т Вернадского, д. 93.',
    pairs: [
      { before: beforeRepair1, after: afterRepair1 },
      { before: beforeRepair2, after: afterRepair2 },
    ],
  },
];

export function SMR() {
  return (
    <section className="section" id="smr">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ y: 12, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          Строительно-монтажные работы
        </motion.h2>
        <div className="grid" style={{ gap: 24 }}>
          {smrProjects.map((proj, pIdx) => (
            <motion.div
              key={proj.title}
              className="card"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: pIdx * 0.05 }}
            >
              <div className="card-title">{proj.title}</div>
              <div className="muted" style={{ marginBottom: 16 }}>{proj.description}</div>
              <div className="ba-grid">
                {proj.pairs.map((pair, idx) => (
                  <div className="ba-pair" key={`${proj.title}-${idx}`}>
                    <div className="ba-photo">
                      <span className="ba-label">До</span>
                      <img src={pair.before} alt={`${proj.title} — до`} />
                    </div>
                    <div className="ba-photo">
                      <span className="ba-label">После</span>
                      <img src={pair.after} alt={`${proj.title} — после`} />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


