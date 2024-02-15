import React from "react";
import platform from "./ui/img/Platform.svg";
import razetka from "./ui/img/image 4.svg";

const Description = () => {
  return (
    <div className="px-[120px] mt-[120px] flex lg:gap-[50px] flex-col">
      <div className="flex lg:flex-row flex-col-reverse gap-[50px] w-full ">
        <div className="p-[35px] flex flex-col gap-3 rounded-[20px] bg-[#F5F1F1] w-full min-w-[600px] lg:w-[60%] text-xl mb-[30px]">
          <p className="font-bold">
            Мобильный модуль шифрования для систем квантового распределения
            ключей
          </p>
          <span>
            Cистема из двух устройств, подключаемых к кодирующей (Алиса) и
            приёмо-передающей (Боб) станции СКРК (система квантового
            распределения ключей), для создания защищённого канала связи в
            открытой сети.
          </span>
        </div>
        <div className="w-full flex justify-center">
          <img src={platform} alt="platform" />
        </div>
      </div>

      <div className="flex lg:flex-row flex-col gap-[50px]">
        <div className="w-full flex justify-center">
          <img src={razetka} alt="img" />
        </div>
        <div className="flex flex-col gap-3 p-[35px] rounded-[20px] bg-[#F5F1F1]  min-w-[600px] w-full lg:w-[60%] text-xl">
          <div>
            Основная проблема, на решение которой направлен продукт – утечки
            данных. Вследствие которых могут быть реализованы кибератаки.
          </div>
          <div>
            Продукт также решает проблему импортозамещения. Косвенные аналоги
            являются зарубежными решениями, покупка и использование которых
            затруднена, а также в ряде ситуаций неприемлема с точки зрения
            обеспечения информационной безопасности.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
