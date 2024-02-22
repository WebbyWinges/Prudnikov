import React from "react";
import {
  MapIcons,
  TgIcons,
  VkIcons,
  YouTubeIcons,
  PhoneIcons,
} from "./ui/icons";
import { Button } from "./ui/button";

const Logo = () => {
  return (
    <div className=" px-[60px] lg:px-[120px] bg-[#272B3A] pt-[25px] pb-[25px] ">
      <div className="flex flex-row justify-between items-center pb-[55px]">
        <div className=" flex flex-row gap-[12px] px-[12px] py-[6px]  lg:px-[20px]  lg:py-[12px]">
          <MapIcons />
          <span className="text-white text-xs lg:text-[15px] not-italic font-medium leading-[normal]">
            ул. Чехова 2, Таганрог, Россия
          </span>
        </div>

        <div className="flex flex-row gap-[33px] items-center">
          <TgIcons />
          <VkIcons />
          <YouTubeIcons />
        </div>

        <div className="flex flex-row items-center gap-[15px]">
          <PhoneIcons />
          <span className="text-white">+7 (495) 114-55-17</span>
          <div className=" flex flex-row gap-[12px] px-[12px] py-[6px] text-white lg:px-[20px]  lg:py-[12px]">
            Заказать звонок
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[35px] mt-[35px] lg:mt-[100px]">
        <div>
          <p className="shrink-0 text-white text-[54px] lg:text-8xl not-italic font-[400] leading-[normal] mr-[720px] ">
            Отечественное мобильное <span>Plug&Play </span> устройство
          </p>
        </div>

        <div className="w-[60%]">
          <p className=" text-white text-xs lg:text-base not-italic font-medium leading-[150%]">
            *Не является средством криптографической защиты информации,
            максимальный размер ключа — не более 56 бит <br /> (Согласно
            постановлению Правительства РФ от 16 апреля 2012 г. N 313)
          </p>
          <p className=" text-white text-xs lg:text-base not-italic font-medium leading-[150%]">
            **Для функционирования требуются работоспособные и подготовленные
            системы квантового распределения ключей
          </p>
        </div>
      </div>
    </div>
  );
};

export default Logo;
