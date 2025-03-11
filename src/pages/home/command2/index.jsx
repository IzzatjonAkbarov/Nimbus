import anna from "../../../shared/assets/images/anna.png";
import pinkstar from "../../../shared/assets/images/pinkstar.png";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import {
  LeftCircleOutlined,
  RightCircleFilled,
  RightCircleOutlined,
} from "@ant-design/icons";

const Command2 = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="relative container1">
      <h1 className="font-bold   text-center text-[20px] pb-10 ">
        Мы - команда
      </h1>
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 20 }, // Small screens
          768: { slidesPerView: 2, spaceBetween: 30 }, // Medium screens
          1024: { slidesPerView: 3, spaceBetween: 40 }, // Large screens
        }}
        className="w-full">
        <SwiperSlide>
          <div className="bg-[#FFEEF2]  rounded-2xl">
            <div className="h-[167px] flex  my-5">
              <div className="h-full w-7 mt-5 bg-[#ff5681]"></div>
              <img src={anna} className="mt-5" alt="" />
            </div>
            <div className="px-10 max-[400px]:px-3">
              <h1 className="text-[20px] font-bold text-[#272727]">Анна</h1>
              <img className="py-4" src={pinkstar} alt="" />
              <h1 className="font-normal opacity-55 pb-10">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown dummy text ever since
                the 1500s, when an unknown
              </h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#FFEEF2]  rounded-2xl">
            <div className="h-[167px] flex  my-5">
              <div className="h-full w-7 mt-5 bg-[#ff5681]"></div>
              <img src={anna} className="mt-5" alt="" />
            </div>
            <div className="px-10 max-[400px]:px-3">
              <h1 className="text-[20px] font-bold text-[#272727]">Анна</h1>
              <img className="py-4" src={pinkstar} alt="" />
              <h1 className="font-normal opacity-55 pb-10">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown dummy text ever since
                the 1500s, when an unknown
              </h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#FFEEF2]  rounded-2xl">
            <div className="h-[167px] flex  my-5">
              <div className="h-full w-7 mt-5 bg-[#ff5681]"></div>
              <img src={anna} className="mt-5" alt="" />
            </div>
            <div className="px-10 max-[400px]:px-3">
              <h1 className="text-[20px] font-bold text-[#272727]">Анна</h1>
              <img className="py-4" src={pinkstar} alt="" />
              <h1 className="font-normal opacity-55 pb-10">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown dummy text ever since
                the 1500s, when an unknown
              </h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#FFEEF2]  rounded-2xl">
            <div className="h-[167px] flex  my-5">
              <div className="h-full w-7 mt-5 bg-[#ff5681]"></div>
              <img src={anna} className="mt-5" alt="" />
            </div>
            <div className="px-10 max-[400px]:px-3">
              <h1 className="text-[20px] font-bold text-[#272727]">Анна</h1>
              <img className="py-4" src={pinkstar} alt="" />
              <h1 className="font-normal opacity-55 pb-10">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown dummy text ever since
                the 1500s, when an unknown
              </h1>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Custom Navigation Buttons */}
      <button
        ref={prevRef}
        className="absolute left-0 top-3/5 -translate-y-1/2 z-10 bg-pink-500 text-white px-2 p-1 rounded-full  transition">
        <LeftCircleOutlined size={24} />
      </button>

      <button
        ref={nextRef}
        className="absolute right-0 top-3/5 -translate-y-1/2 z-10 bg-pink-500 text-white px-2 p-1 rounded-full  transition">
        <RightCircleOutlined size={24} />
      </button>
    </div>
  );
};

export default Command2;
