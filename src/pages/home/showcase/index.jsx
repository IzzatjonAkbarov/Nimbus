import { Button } from "antd";
import React from "react";
import showcaseimg from "../../../shared/assets/images/showcaseimg.png";
import showcaseimg2 from "../../../shared/assets/images/showcaseimg2.png";
const Showcase = () => {
  return (
    <div className=" py-10">
      <div className="container1 bg-[#f9f9f9]  flex items-center gap-10 max-[600px]:gap-5 justify-between rounded-2xl max-[1030px]:flex-col-reverse">
        <div className="w-[50%] p-10 max-[600px]:p-4 max-[1030px]:w-full">
          <h1 className="text-[45px] text-[#272727] font-bold max-[600px]:text-[30px] max-[400px]:text-[20px]">
            Роспись стен в Санкт-Петербурге
          </h1>
          <p className="text-[#272727] text-[18px] font-normal mt-8 max-[600px]:text-[13px]">
            Закажите роспись стен в Санкт-Петербурге от художественной студии
            Нимбус. Авторская техника росписи. Оформляем квартиры, детские и
            офисы от 1 дня. Создаем эскизы, сами закупаем материалы и оставляем
            всё в чистоте. Вам нужно только позвонить нам.
          </p>
          <form
            action=""
            className="bg-white w-full h-fit flex items-center justify-between mt-14 max-[500px]:mt-5 rounded-lg">
            <input
              type="text"
              placeholder="0 (000) 000-00-00"
              className="outline-none pl-3 w-full"
            />
            <Button size="large" className="!bg-[#ff5681]  !text-white hover:">
              заказать
            </Button>
          </form>
        </div>

        <div className="max-[1030px]:w-full">
          <img
            className="max-[1030px]:hidden rounded-5xl overflow-hidden"
            src={showcaseimg}
            alt=""
          />
          <img
            className="max-[1030px]:w-full max-[1030px]:h-[300px] max-[500px]:h-auto hidden max-[1030px]:hidden"
            src={showcaseimg2}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Showcase;
