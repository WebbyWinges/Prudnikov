import React from "react";
import { TgIcons, VkIcons, YouTubeIcons } from "./ui/icons";
import Image from "next/image";
import Cart from "./ui/img/карта.svg";
const Contact = () => {
  return (
    <div className="pt-[60px] pb-[60px] px-[60px] lg:px-[120px] bg-[#272B3A]">
      <h2 className="text-[64px] pb-[10px] text-white">Контакты</h2>
      <div className="bg-[#f5f1f1] p-[120px] flex gap-[74px] flex-row justify-between">
        <div className="flex gap-3 flex-col">
          <div className="flex gap-[74px]">
            <div className="flex flex-col gap-10">
              <div>
                <p className="text-lg font-medium leading-[22px] tracking-normal text-left">
                  Адрес:
                </p>
                <span>ул. Чехова 2, Таганрог, Россия</span>
              </div>
              <div>
                <p className="text-lg font-medium leading-[22px] tracking-normal text-left">
                  Телефон:
                </p>
                <span>+7 (495) 114-55-17</span>
              </div>
            </div>

            <div className="flex flex-col gap-10">
              <div>
                <p className="text-lg font-medium leading-[22px] tracking-normal text-left;">
                  Режим работы:
                </p>
                <span>Пн.-Пт.: с 10:00 до 20:00 </span>
              </div>
              <div>
                <p className="text-lg font-medium leading-[22px] tracking-normal text-left;">
                  E-mail:
                </p>
                <span>pruvad-tech@yandex.ru</span>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-[33px] items-center">
            <TgIcons />
            <VkIcons />
            <YouTubeIcons />
          </div>
        </div>

        <div className="flex flex-col gap-[12px]">
          <p className="text-[24px]">Как нас найти?</p>
          <Image src={Cart} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
