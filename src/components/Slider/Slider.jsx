import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./Slider.css";
import { Navigation } from "swiper";
import { NavLink } from "react-router-dom";

export const Slider = () => {
  return (
    <>
      <h2 id="title">Categorias</h2>
      <Swiper
        slidesPerView={3}
        spaceBetween={40}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <NavLink to="/calça">
            <img src="img/roupas_sem_fundo/jeans1.png" alt="jeans" />
            <i className="name">Calças</i>
          </NavLink>
        </SwiperSlide>
        <SwiperSlide>
          <NavLink to="/camiseta">
            <img src="img/roupas_sem_fundo/shirt1.png" alt="shirt" />
            <i className="name">Camisetas</i>
          </NavLink>
        </SwiperSlide>
        <SwiperSlide>
          <NavLink to="/camisa">
            <img src="img/roupas_sem_fundo/sweater1.png" alt="sweater" />
            <i className="name">Camisas</i>
          </NavLink>
        </SwiperSlide>
        <SwiperSlide>
          <NavLink to="/moletom">
            <img src="img/roupas_sem_fundo/sweatpants1.png" alt="sweatpants" />
            <i className="name">Moletom</i>
          </NavLink>
        </SwiperSlide>
        <SwiperSlide>
          <NavLink to="/jaqueta">
            <img src="img/roupas_sem_fundo/sweatshirt1.png" alt="sweatshirt" />
            <i className="name">Jaqueta</i>
          </NavLink>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
