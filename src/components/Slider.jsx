import { Swiper, SwiperSlide } from "swiper/react";
import "./Slider.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

export default function Slider() {
  return (
    <section id="certificates">
      <div id="slider-container">
        <div id="h2-container">
          <h2 id="certificates-title">Certificados</h2>
          <div className="decoration"></div>
        </div>
        <h3>Aqui estão os meus certificados até o momento :)</h3>
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={50}
          slidesPerView={1}
        >
          <SwiperSlide>
            <div className="certificates-container">
              <div>
                <img src="/javascript.jpg" alt="Certificado JavaScript" />
              </div>
              <div>
                <img src="/inovacao.jpg" alt="Certificado Inovação PUC" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="certificates-container">
              <div>
                <img src="/git.jpg" alt="Certificado Git" />
              </div>
              <div>
                <img src="/css.jpg" alt="Certificado Git" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
