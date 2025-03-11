import React from "react";
import banana from "../../../shared/assets/images/banana.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
const Staties = () => {
  return (
    <div className="py-20">
      <h1 className="font-bold   text-center text-[20px] pb-3 ">Статьи</h1>

      <p className="font-normal text-center text-[#272727] px-5">
        Наша деятельность / Советы / Лайфхаки / Идеи
      </p>

      <div className=" container1 pt-4">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 30 },
            1024: { slidesPerView: 3, spaceBetween: 40 },
          }}
          className="w-full">
          <SwiperSlide>
            <div className="rounded-[24px] bg-[#f9f9f9]">
              <img className="w-full" src={banana} alt="" />
              <div className="px-8">
                <h1 className="pt-3 text-[14px] font-thin text-[#272727] opacity-80">
                  Артём Кукшинский
                </h1>

                <p className="py-3 text-[#272727] font-bold text-[20px]">
                  Простые рисунки на стену своими руками
                </p>
                <h1 className="text-[16px] font-thin text-[#272727] opacity-80">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown{" "}
                </h1>
                <button className=" text-[#ff6b90] w-full py-3 mb-5 hover:bg-[#ff6b90] hover:text-white transition-all mt-10 bg-white rounded-xl">
                  Подробнее
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="rounded-[24px] bg-[#f9f9f9]">
              <img className="w-full" src={banana} alt="" />
              <div className="px-8">
                <h1 className="pt-3 text-[14px] font-thin text-[#272727] opacity-80">
                  Артём Кукшинский
                </h1>

                <p className="py-3 text-[#272727] font-bold text-[20px]">
                  Простые рисунки на стену своими руками
                </p>
                <h1 className="text-[16px] font-thin text-[#272727] opacity-80">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown{" "}
                </h1>
                <button className=" text-[#ff6b90] w-full py-3 mb-5 hover:bg-[#ff6b90] hover:text-white transition-all mt-10 bg-white rounded-xl">
                  Подробнее
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="rounded-[24px] bg-[#f9f9f9]">
              <img className="w-full" src={banana} alt="" />
              <div className="px-8">
                <h1 className="pt-3 text-[14px] font-thin text-[#272727] opacity-80">
                  Артём Кукшинский
                </h1>

                <p className="py-3 text-[#272727] font-bold text-[20px]">
                  Простые рисунки на стену своими руками
                </p>
                <h1 className="text-[16px] font-thin text-[#272727] opacity-80">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown{" "}
                </h1>
                <button className=" text-[#ff6b90] w-full py-3 mb-5 hover:bg-[#ff6b90] hover:text-white transition-all mt-10 bg-white rounded-xl">
                  Подробнее
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="rounded-[24px] bg-[#f9f9f9]">
              <img className="w-full" src={banana} alt="" />
              <div className="px-8">
                <h1 className="pt-3 text-[14px] font-thin text-[#272727] opacity-80">
                  Артём Кукшинский
                </h1>

                <p className="py-3 text-[#272727] font-bold text-[20px]">
                  Простые рисунки на стену своими руками
                </p>
                <h1 className="text-[16px] font-thin text-[#272727] opacity-80">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown{" "}
                </h1>
                <button className=" text-[#ff6b90] w-full py-3 mb-5 hover:bg-[#ff6b90] hover:text-white transition-all mt-10 bg-white rounded-xl">
                  Подробнее
                </button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Staties;
