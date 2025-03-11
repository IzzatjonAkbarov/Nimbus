import React from "react";
import card1 from "../../../shared/assets/images/1rowcard.png";
import card2 from "../../../shared/assets/images/2rowcard.png";
import card3 from "../../../shared/assets/images/3rowcard.png";
import card4 from "../../../shared/assets/images/4rowcard.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const Taxes = () => {
  return (
    <>
      <div className="bg-[#f9f9f9] py-14">
        <div className="container1 ">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
              280: { slidesPerView: 1, spaceBetween: 20 },
              640: { slidesPerView: 2, spaceBetween: 30 },
              900: { slidesPerView: 3, spaceBetween: 30 },
              1024: { slidesPerView: 4, spaceBetween: 40 },
            }}
            className="w-full">
            <SwiperSlide>
              <div className="p-3 rounded-lg card hover:**:last:bg-[#ff5681] hover:**:last:text-white  shadow-[12px_12px_50px_0_rgba(0,0,0,0.1)] bg-white transition-transform duration-300 hover:-translate-y-2">
                <img className="mx-auto" src={card1} alt="" />
                <p className="text-[20px] font-bold text-center pt-5 text-[#272727]">
                  Роспись стен в офисе
                </p>
                <button className="px-7 mx-auto mt-4 flex py-2 rounded-3xl border text-[14px] mb-2">
                  Подробнее
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="p-3 rounded-lg card hover:**:last:bg-[#ff5681] hover:**:last:text-white  shadow-[12px_12px_50px_0_rgba(0,0,0,0.1)] bg-white transition-transform duration-300 hover:-translate-y-2">
                <img className="mx-auto" src={card2} alt="" />
                <p className="text-[20px] font-bold text-center pt-5 text-[#272727]">
                  Граффити
                </p>
                <button className="px-7 mx-auto mt-4 flex py-2 rounded-3xl border text-[14px] mb-2">
                  Подробнее
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="p-3 rounded-lg card hover:**:last:bg-[#ff5681] hover:**:last:text-white  shadow-[12px_12px_50px_0_rgba(0,0,0,0.1)] bg-white transition-transform duration-300 hover:-translate-y-2">
                <img className="mx-auto" src={card3} alt="" />
                <p className="text-[20px] font-bold text-center pt-5 text-[#272727]">
                  Роспись в детской
                </p>
                <button className="px-7 mx-auto mt-4 flex py-2 rounded-3xl border text-[14px] mb-2">
                  Подробнее
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="p-3 rounded-lg card hover:**:last:bg-[#ff5681] hover:**:last:text-white  shadow-[12px_12px_50px_0_rgba(0,0,0,0.1)] bg-white transition-transform duration-300 hover:-translate-y-2">
                <img className="mx-auto" src={card4} alt="" />
                <p className="text-[20px] font-bold text-center pt-5 text-[#272727]">
                  Роспись в квартире
                </p>
                <button className="px-7 mx-auto mt-4 flex py-2 rounded-3xl border text-[14px] mb-2">
                  Подробнее
                </button>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Taxes;
