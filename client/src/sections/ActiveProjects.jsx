import { motion } from 'framer-motion';

const active = [
  { title: 'Строительство верфи', subtitle: 'КМ и КМД НВФ, заказчик: Профметалл', img: 'https://images.unsplash.com/photo-1464961605736-6a34b1230231?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Имущественный комплекс №8', subtitle: 'КМ, КМД, заказчик: Профметалл', img: 'https://images.unsplash.com/photo-1541976590-713941681591?q=80&w=1200&auto=format&fit=crop' },
  { title: 'ЖК «Афи парк Вороцновский»', subtitle: 'КМ и КМД НВФ, заказчик: Профметалл', img: 'https://images.unsplash.com/photo-1499914485622-a88fac536970?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Корпус инфекционного отделения ЯНАО', subtitle: 'Раскладка облицовки фасада', img: 'https://images.unsplash.com/photo-1541976590-713941681591?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Тарко-Салинская ЦРБ', subtitle: 'Раскладка облицовки фасада', img: 'https://images.unsplash.com/photo-1464961605736-6a34b1230231?q=80&w=1200&auto=format&fit=crop' },
];

export function ActiveProjects() {
  return (
    <section className="section" id="active-projects">
      <div className="container">
        <motion.h2 className="section-title" initial={{ y: 12, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }}>Действующие проекты</motion.h2>
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


