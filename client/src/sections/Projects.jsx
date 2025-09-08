
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


