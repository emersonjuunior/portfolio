import { Swiper, SwiperSlide } from "swiper/react";
import "./Slider.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { motion } from "framer-motion";

export default function Slider() {
  return (
    <section id="certificates">
      <motion.div
        initial={{ opacity: 0.5, x: -70 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
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
          <div id="certificates-container">
            <div id="certificates-wrapper">
              <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                slidesPerView={2} 
                centeredSlides={true} 
                loop={true} 
                grabCursor={true} 
                breakpoints={{
                  300: {
                    spaceBetween: 100,
                  },
                  767: {
                    spaceBetween: 20
                  }
                }}
              >
                <SwiperSlide>
                  <div className="img-wrapper">
                    <img src="/react.jpg" alt="Certificado React" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="img-wrapper">
                    <img src="/javascript.jpg" alt="Certificado JavaScript" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="img-wrapper">
                    <img src="/inovacao.jpg" alt="Certificado Inovação PUC Minas" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="img-wrapper">
                    <img src="/git.jpg" alt="Certificado Git e GitHub" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="img-wrapper">
                    <img src="/css.jpg" alt="Certificado CSS" />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
