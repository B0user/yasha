
import { Box } from "@mui/material";
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import imgOstafyevo from '../assets/projects/Остафьево.webp';
import imgSputnik from '../assets/projects/СПУТНИК.webp';
import imgCenter from '../assets/projects/Центр инноваций и импортозамещения.webp';
import imgRudnevo from '../assets/projects/Промзона «Руднево».webp';
import imgHouses from '../assets/projects/Жилые дома.webp';
import imgNovayaRazvilka from '../assets/projects/ЖК «НОВАЯ РАЗВИЛКА».webp';
import imgKindergarten from '../assets/projects/Детское дошкольное учреждение .webp';
import ongoing1 from '../assets/projects/ongoingproject1.webp';
import ongoing2 from '../assets/projects/ongoingproject2.webp';
import ongoing3 from '../assets/projects/ongoingproject3.webp';
import ongoing4 from '../assets/projects/ongoingproject4.webp';
import ongoing5 from '../assets/projects/ongoingproject5.webp';

const completed = [
  { 
    title: 'ЖК «СПУТНИК»', 
    subtitle: 'фасады, смета 2,5 млн ₽, сдано за 3 месяца',
    description: 'Полный цикл работ по навесным вентилируемым фасадам для ГК «Самолет»',
    img: imgSputnik 
  },
  { 
    title: 'Капремонт МКД', 
    subtitle: 'без удорожаний, с гарантией 3 года',
    description: 'Комплексный ремонт кровли и фасада многоквартирного дома',
    img: imgHouses 
  },
  { 
    title: 'Промзона «Руднево»', 
    subtitle: 'КМД фасадов, заказчик: ЗИАС',
    description: 'Проектирование и монтаж металлоконструкций промышленного объекта',
    img: imgRudnevo 
  },
  { 
    title: 'Центр инноваций', 
    subtitle: 'фахверки, заказчик: ГК «Самолет»',
    description: 'Современные светопрозрачные конструкции и металлокаркас',
    img: imgCenter 
  }
];

export function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ y: 12, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          Проектирование
        </motion.h2>
        <Box sx={{ 
        height: "100%",
        maxWidth: { xs: "24em", md: "100%" }, }}>
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              900: { slidesPerView: 3 },
              600: { slidesPerView: 2 }
            }}
            style={{ paddingBottom: "40px" }}
          >
            {completed.map((p, idx) => (
              <SwiperSlide key={p.title}>
                <motion.div
                  className="gallery-card"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <img src={p.img} alt={p.title} style={{ width: "100%", height: 220, objectFit: "cover", borderRadius: 8 }} />
                  <div className="info">
                    <div className="card-title">{p.title}</div>
                    <div className="muted">{p.subtitle}</div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
        
      </div>
    </section>
  );
}


