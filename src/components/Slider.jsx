import { Swiper, SwiperSlide } from "swiper/react";
import "./Slider.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import {motion} from "framer-motion"

export default function Slider() {
  return (
    <section id="certificates">
      <motion.div 
      initial={{opacity: .5, x: -70}}
      whileInView={{opacity: 1, x: 0}}
      transition={{duration: 1}}
      viewport={{once: true}}
      >
      <div id="slider-container">
        <div className="section-subtitle-container">
          <div className="h2-container">
            <h2 className="section-subtitle">Certificados</h2>
            <div className="decoration"></div>
          </div>
          <h3 className="subtitle">
            Abaixo estão os meus <span>certificados</span> até o momento :)
          </h3>
        </div>
        <div className="certificates-container">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={10} // Espaço entre os slides
            slidesPerView={2} // Exibe o slide central e parte dos dois próximos slides
            centeredSlides={true} // Centraliza o slide ativo
            loop={true} // Loop para os slides
            grabCursor={true} // Cursor de "arrastar" no mouse
          >
            <SwiperSlide>
              <div className="img-wrapper">
                <img src="/javascript.jpg" alt="Image 1" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="img-wrapper">
                <img src="/inovacao.jpg" alt="Image 2" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="img-wrapper">
                <img src="/git.jpg" alt="Image 3" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="img-wrapper">
                <img src="/css.jpg" alt="Image 4" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      </motion.div>
    </section>
  );
}
