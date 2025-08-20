import { motion } from 'framer-motion';

const completed = [
  { title: 'ЖК «Остафьево»', subtitle: 'КМ НВФ, заказчик: ГК «Самолет»', img: 'https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200&auto=format&fit=crop' },
  { title: 'ЖК «СПУТНИК»', subtitle: 'КМ НВФ, заказчик: ГК «Самолет»', img: 'https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Центр инноваций и импортозамещения', subtitle: 'КМ, фахверки, заказчик: ГК «Самолет»', img: 'https://images.unsplash.com/photo-1487730116645-74489c95b41b?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Промзона «Руднево»', subtitle: 'КМ, КМД фасадов, заказчик: ЗИАС', img: 'https://images.unsplash.com/photo-1499914485622-a88fac536970?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Жилые дома', subtitle: 'Разработка КМ НВФ, заказчик: ЗИАС', img: 'https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200&auto=format&fit=crop' },
  { title: 'ЖК «Новая Развилка»', subtitle: 'Светопрозрачные конструкции', img: 'https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Детский сад', subtitle: 'Светопрозрачные конструкции', img: 'https://images.unsplash.com/photo-1487730116645-74489c95b41b?q=80&w=1200&auto=format&fit=crop' },
];

export function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <motion.h2 className="section-title" initial={{ y: 12, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }}>Реализованные проекты</motion.h2>
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


