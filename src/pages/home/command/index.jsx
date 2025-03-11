import React from "react";
import { Link } from "react-router-dom";

const Command = () => {
  return (
    <div className="container1">
      <div className="text-center">
        <h1 className="text-[#272727] font-bold text-[26px]">Мы - команда</h1>
        <p className="font-normal text-[#272727] pt-5 w-[50%] max-[1030px]:w-[80%] max-[500px]:w-full max-[1030px]:text-[13px] mx-auto">
          О нас написали в Деловом Петербурге, Невских Новостях, Авито Подкасте,
          Подкасте Либо-Либо, vc.ru и многие другие. Также мы открыли свою школу
          росписи стен, запустили франшизу и зарегистрировали товарный знак.
        </p>
      </div>
      <div className="flex items-center gap-5 flex-wrap py-10">
        <Link className="p-5 commanditem border  border-[#e6e6e6] rounded-xl hover:text-white hover:bg-[#272727] max-[500px]:text-[14px] max-[500px]:p-3 transition-all">
          Наши успехи
        </Link>
        <Link className="p-5 commanditem border border-[#e6e6e6] rounded-xl hover:text-white hover:bg-[#272727] max-[500px]:text-[14px] max-[500px]:p-3 transition-all">
          За <span>2021</span> год в Санкт-Петербурге
        </Link>
        <Link className="p-5 commanditem border border-[#e6e6e6] rounded-xl hover:text-white hover:bg-[#272727] max-[500px]:text-[14px] max-[500px]:p-3 transition-all">
          <span>10</span> детских
        </Link>
        <Link className="p-5 commanditem border border-[#e6e6e6] rounded-xl hover:text-white hover:bg-[#272727] max-[500px]:text-[14px] max-[500px]:p-3 transition-all">
          <span>14</span> офисов
        </Link>
        <Link className="p-5 commanditem border border-[#e6e6e6] rounded-xl hover:text-white hover:bg-[#272727] max-[500px]:text-[14px] max-[500px]:p-3 transition-all">
          <span>52</span> пекарни
        </Link>
        <Link className="p-5 commanditem border border-[#e6e6e6] rounded-xl hover:text-white hover:bg-[#272727] max-[500px]:text-[14px] max-[500px]:p-3 transition-all">
          <span>12</span> квартир
        </Link>
        <Link className="p-5 commanditem border border-[#e6e6e6] rounded-xl hover:text-white hover:bg-[#272727] max-[500px]:text-[14px] max-[500px]:p-3 transition-all">
          <span>7</span> салонов красоты
        </Link>
        <Link className="p-5 commanditem border border-[#e6e6e6] rounded-xl hover:text-white hover:bg-[#272727] max-[500px]:text-[14px] max-[500px]:p-3 transition-all">
          <span>3</span> школы
        </Link>
        <Link className="p-5 commanditem border border-[#e6e6e6] rounded-xl hover:text-white hover:bg-[#272727] max-[500px]:text-[14px] max-[500px]:p-3 transition-all">
          <span>2</span> кофейни
        </Link>
        <Link className="p-5 commanditem border border-[#e6e6e6] rounded-xl hover:text-white hover:bg-[#272727] max-[500px]:text-[14px] max-[500px]:p-3 transition-all">
          <span>1</span> отель
        </Link>
      </div>
    </div>
  );
};

export default Command;
