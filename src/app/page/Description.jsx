import React from "react";
import platform from "./ui/img/Platform.svg";
import razetka from "./ui/img/image 4.svg";
import Image from "next/image";
import blue from "../../../public/Голубая штука.svg";

const Description = () => {
  return (
    <div className=" relative">
      <div className="px-[120px] pt-[120px] flex lg:gap-[50px] flex-col bg-[#272B3A]">
        <div className="flex lg:flex-row flex-col-reverse gap-[50px] w-full ">
          <div className="p-[35px] flex flex-col gap-3 rounded-[20px] text-white font-[300] w-full leading-[30px] min-w-[630px] lg:w-[60%] text-[20px] mb-[30px]">
            <span>
              Мобильный модуль шифрования для систем квантового распределения
              ключей Cистема из двух устройств, подключаемых к кодирующей
              (Алиса) и приёмо-передающей (Боб) станции СКРК (система квантового
              распределения ключей), для создания защищённого канала связи в
              открытой сети.
            </span>
          </div>
          <div className="w-full flex justify-center">
            <Image src={platform} alt="platform" />
          </div>
        </div>

        <div className="flex lg:flex-row flex-col gap-[50px]">
          <div className="w-full flex justify-center">
            <Image src={razetka} alt="img" />
          </div>
          <div className="p-[35px] flex flex-col gap-3 rounded-[20px] text-white font-[300] w-full leading-[30px] min-w-[630px] lg:w-[60%] text-[20px] mb-[30px]">
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
      <div className="hidden  lg:block  absolute bottom-[calc(100%-880px)] xl:bottom-[calc(100%-900px)] 2xl:bottom-[calc(100%-940px)] z-[10] w-[100%] ">
        <Image className="!w-[100%]" src={blue} alt="blue" />
      </div>
    </div>
  );
};

export default Description;
