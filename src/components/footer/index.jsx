import React from "react";
import star from "../../shared/assets/images/star.png";
import Telegram from "../../shared/assets/images/Telegram.png";
import Youtube from "../../shared/assets/images/Youtube.png";
import vk from "../../shared/assets/images/vk.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="container1 ">
      <div className="flex items-center gap-10 w-[70%] max-[600px]:w-[100%] mx-auto">
        <div className="w-[50%] max-[600px]:w-[30] h-[1px] border border-dashed"></div>
        <div className="h-10 w-[40px] max-[600px]:h-7 rounded-full border border-dashed text-center flex justify-center items-center">
          5
        </div>
        <div className="w-[50%] h-[1px] border border-dashed"></div>
      </div>
      <p className="text-center text-[#272727] py-5">Рейтинг статьи </p>
      <img className="w-fit mx-auto" src={star} alt="" />

      <div className="flex items-center gap-3 mx-auto w-fit my-3">
        <img src={Youtube} alt="" />
        <img src={Telegram} alt="" />
        <img src={vk} alt="" />
      </div>

      <div className="grid grid-cols-5 py-10 max-[810px]:grid-cols-3 max-[600px]:grid-cols-2 max-[380px]:grid-cols-1">
        <div className="flex items-start flex-col">
          <h1 className="font-normal text-[#302b2b] py-2">Портфолио</h1>
          <Link className="hover:underline font-thin text-[#302b2b] ">
            Фотографии
          </Link>
          <Link className="hover:underline font-thin text-[#302b2b] ">
            Видео
          </Link>
        </div>{" "}
        <div className="flex items-start flex-col">
          <h1 className="font-normal text-[#302b2b] py-2">Название </h1>
          <Link className="hover:underline font-thin text-[#302b2b] ">
            Цены
          </Link>
          <Link className="hover:underline font-thin text-[#302b2b] ">
            Гарантия и возврат
          </Link>
          <Link className="hover:underline font-thin text-[#302b2b] ">
            Наш договор на роспись
          </Link>
          <Link className="hover:underline font-thin text-[#302b2b] ">
            Оплата
          </Link>
        </div>
        <div className="flex items-start flex-col">
          <h1 className="font-normal text-[#302b2b] py-2">Название </h1>
          <Link className="hover:underline font-thin text-[#302b2b] ">
            Услуги
          </Link>
          <Link className="hover:underline font-thin text-[#302b2b] ">
            Роспись стен
          </Link>
          <Link className="hover:underline font-thin text-[#302b2b] ">
            Дизайн интерьера
          </Link>
          <Link className="hover:underline font-thin text-[#302b2b] ">
            Роспись стен в офисе
          </Link>
          <Link className="hover:underline font-thin text-[#302b2b] ">
            Граффити
          </Link>
        </div>
        <div className="flex items-start flex-col">
          <h1 className="font-normal text-[#302b2b] py-2">Контакты</h1>
          <Link className="hover:underline font-thin text-[#302b2b] ">
            Контакты
          </Link>
        </div>{" "}
        <div className="flex items-start flex-col">
          <h1 className="font-normal text-[#302b2b] py-2">Название </h1>
          <Link className="hover:underline font-thin text-[#302b2b] ">
            О нас
          </Link>
          <Link className="hover:underline font-thin text-[#302b2b] ">
            Вопросы про роспись стен
          </Link>
          <Link className="hover:underline font-thin text-[#302b2b] ">
            Вакансии
          </Link>
          <Link className="hover:underline font-thin text-[#302b2b] ">
            Реквизиты компании
          </Link>
          <Link className="hover:underline font-thin text-[#302b2b] ">
            СМИ о нас
          </Link>
          <Link className="hover:underline font-thin text-[#302b2b] ">
            Отзывы
          </Link>
        </div>
      </div>
      <div className="text-center text-[10px] text-[#7b7b7b] py-10">
        © 2018-2023, Nimbus - скоростная роспись стен
      </div>
    </div>
  );
};

export default Footer;
