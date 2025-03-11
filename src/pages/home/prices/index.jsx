import { Button } from "antd";
import React from "react";

const Prices = () => {
  return (
    <div className="py-10">
      <h1 className="font-bold   text-center text-[20px] pb-10 ">
        Цена росписи стен
      </h1>
      <div className="grid grid-cols-3 container1  gap-10 max-[1030px]:grid-cols-2 max-[555px]:grid-cols-1">
        <div
          className="py-10 shadow-[12px_12px_50px_0_rgba(0,0,0,0.1)] rounded-2xl text-center px-10 bg-white
">
          <p className="text-[24px] font-normal text-[#272727]  text-center">
            Просто
          </p>
          <div className="flex flex-col items-center justify-center ">
            <p className="font-semibold text-[#ff5681] text-[24px] py-7">
              от 900 ₽{" "}
              <sup className="font-normal text-[#272727] text-[14px]">
                за м2
              </sup>
            </p>
            <p className="text-[14px] text-[#787878] font-normal">
              Геометрия, линии и роспись по скотчу
            </p>
            <button className="py-2 px-10 rounded-lg mt-14 border  border-[#ff5681] text-[#ff5681] hover:bg-[#ff5681] hover:text-white transition-all">
              заказать
            </button>
          </div>
        </div>
        <div
          className="py-10 shadow-[12px_12px_50px_0_rgba(0,0,0,0.1)] rounded-2xl text-center px-10 bg-white
">
          <p className="text-[24px] font-normal text-[#272727]  text-center">
            Детально
          </p>
          <div className="flex flex-col items-center justify-center ">
            <p className="font-semibold text-[#ff5681] text-[24px] py-7">
              от 2000 ₽
              <sup className="font-normal text-[#272727] text-[14px]">
                за м2
              </sup>
            </p>
            <p className="text-[14px] text-[#787878] font-normal">
              Более детальные прорисовки и от двух художников
            </p>
            <button className="py-2 px-10 rounded-lg mt-14 border  border-[#ff5681] text-[#ff5681] hover:bg-[#ff5681] hover:text-white transition-all">
              заказать
            </button>
          </div>
        </div>
        <div
          className="py-10 shadow-[12px_12px_50px_0_rgba(0,0,0,0.1)] rounded-2xl text-center px-10 bg-white
">
          <p className="text-[24px] font-normal text-[#272727]  text-center">
            Идеально
          </p>
          <div className="flex flex-col items-center justify-center ">
            <p className="font-semibold text-[#ff5681] text-[24px] py-7">
              от 2500 ₽
              <sup className="font-normal text-[#272727] text-[14px]">
                за м2
              </sup>
            </p>
            <p className="text-[14px] text-[#787878] font-normal">
              Профессиональные рисунки с тенями и деталями
            </p>
            <button className="py-2 px-10 rounded-lg mt-14 border  border-[#ff5681] text-[#ff5681] hover:bg-[#ff5681] hover:text-white transition-all">
              заказать
            </button>
          </div>
        </div>
      </div>
      <p className="w-[70%] max-[500px]:w-[90%] mx-auto text-[#787878] text-[13px] mt-10">
        Стоимость художественной росписи стен в Санкт-Петербурге рассчитывается
        индивидуально. На цену влияет размер рисунка, сложность, особенности
        поверхности и вид материалов. При заказе большого объема мы делаем
        скидки. Если у вас ограниченный бюджет, мы подстраиваемся и подбираем
        несложные рисунки. Стоимость материалов всегда оплачивается отдельно.
        Также отдельно оплачивается эскиз. Закажите роспись стен в спб у нас на
        сайте.
      </p>

      <div className="py-20 w-[50%] mx-auto max-[840px]:w-[90%]">
        <div className="rounded-2xl bg-[#f9f9f9] py-[30px] px-16 max-[500px]:px-4 ">
          <div className="flex items-center justify-between gap-3 max-[1050px]:flex-col">
            <h1 className="font-bold  text-[20px] ">Заказать роспись стен</h1>
            <p className="text-[13px] max-[500px]:text-center font-thin text-[#787878]">
              *согласие на обработку
              <span className="text-[#ff5681]">персональных данных</span>
            </p>
          </div>
          <form
            action=""
            className="bg-white w-full h-fit flex items-center justify-between mt-4 rounded-lg">
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
      </div>
    </div>
  );
};

export default Prices;
