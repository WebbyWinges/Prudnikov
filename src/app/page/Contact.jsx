"use client";
import React from "react";
import { TgIcons, VkIcons, YouTubeIcons } from "./ui/icons";
import Image from "next/image";
import Cart from "./ui/img/карта.svg";
const Contact = () => {
  // ymaps.ready(() => {
  //   const myMap = new ymaps.Map(mapRef.current, {
  //     center: [47.203948, 38.943917],
  //     zoom: 18,
  //   });
  // });

  return (
    <div className="pt-[20px] pb-[60px] px-[60px] lg:px-[120px] bg-white">
      <h2 className="text-[32px] lg:text-[64px] p-[0px] lg:px-[120px] pb-[10px] text-black">
        Контакты
      </h2>
      <div className="bg-white p-[0px] lg:p-[120px] flex flex-col lg:flex-row justify-center gap-[60px] lg:gap-[260px]">
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
                <span>+7 (919) 896-14-27</span>
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
          {/* 
          <div id="map" style={{ width: "500px", height: "400px" }}></div> */}
        </div>
      </div>
      <div class="container mx-auto my-8">
        <hr class="border-t-2 border-black w-full" />
      </div>
    </div>
  );
};

export default Contact;
