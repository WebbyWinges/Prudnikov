"use client";
import React from "react";
import schem from "./ui/img/схема.svg";
import { GoGitCommit } from "react-icons/go";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import art from "../page/ui/img/art_life 1.svg";
import ban from "../page/ui/img/bananas 1.svg";
import fond from "../page/ui/img/image 9.svg";
import ictis from "../page/ui/img/logoictis 1.svg";
import sfedu from "../page/ui/img/logosfedurus 1.svg";
import kfc from "../page/ui/img/safety-kfc 1.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo from "./ui/img/pruvad-tech 1.svg";

const settings = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
};

const Company = () => {
  return (
    <>
      <div class="container mx-auto my-8">
        <hr class="border-t-2 border-black w-full" />
      </div>
      <div className="pt-[60px] pb-[60px] px-[60px] lg:px-[120px] bg-white">
        <h2 className="text-[32px] lg:text-[64px] text-black">О компании</h2>
        <>
          <div className="flex relative justify-center">
            <Slider
              {...settings}
              className=" !flex !items-center !gap-3 mx-[100px] my-[40px] max-w-[220px] sm:max-w-[450px] lg:max-w-[500px] xl:max-w-[835px] 2xl:max-w-[1200px] "
            >
              <div className="bg-transparent text-black  p-[0px] lg:p-[45px] rounded-lg">
                ООО "ПРУВАД-ТЕХ" была основана в 2023 году в результате победы
                проекта "Мобильный модуль шифрования для систем квантового
                распределения ключей" в конкурсе "Студенческий Стартап" Фонда
                содействия развитию малых форм предприятий в научно-технической
                сфере (Фонд содействия инновациям).
                <br />
                <br />
                Проект берёт своё начало в 2020 году, его прототип "Разработка
                программно-аппаратного модуля шифрования для систем квантового
                распределения ключей", так же одержал победу в конкурсе Фонда
                содействия инновациям — УМНИК-20 (ЦЭ-1), что позволило ему
                получить существенное развитие. На текущий момент ПРУВАД-ТЕХ
                занимается исследованиями и разработками в перспективном
                направлении "Квантовые технологии".
              </div>
              <div className="bg-transparent text-black p-[0px] lg:p-[45px] rounded-lg">
                Полное наименование: ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ
                "ПРУВАД-ТЕХ"
                <br />
                Сокращенное наименование: ООО "ПРУВАД-ТЕХ"
                <br />
                ИНН/КПП: 6154165885/615401001
                <br />
                ОГРН: 1236100025809
                <br />
                Юридический адрес: 347916, Ростовская обл, г Таганрог, ул
                Циолковского, д 30-3, кв 68
                <br />
                Фактический адрес: 347916, Ростовская обл, г Таганрог, ул
                Циолковского, д 30-3, кв 68
                <br />
                Телефон:+7 (919) 896-14-27
                <br />
                Электронная почта: pruvad-tech@yandex.ru Сайт: pruvad-tech.ru
              </div>
              <div className="bg-transparent flex-wrap lg:flex-nowrap  p-[0px] lg:p-[45px] justify-center text-black rounded-lg !flex gap-3">
                <div className=" rounded-lg bg-[#ffffff10] px-3  text-center flex flex-col justify-center items-center min-w-[124px] max-w-[124px] min-h-[124px] gap-3 ">
                  <Image
                    src={art}
                    width={80}
                    height={80}
                    style={{ height: "80px" }}
                  />
                  <p className=" text-xs text-black">ООО "АРТ Лайф"</p>
                </div>
                <div className=" rounded-lg text-xs bg-[#ffffff10] px-3 text-center flex flex-col justify-center items-center min-w-[124px] max-w-[124px] min-h-[124px] gap-3 ">
                  <Image
                    src={ban}
                    width={80}
                    height={80}
                    style={{ height: "80px" }}
                  />
                  <p className=" text-xs text-black">ООО "БАНАНАС СОЛЮШН"</p>
                </div>
                <div className=" rounded-lg bg-[#ffffff10] px-3 text-center flex flex-col justify-center items-center min-w-[124px] max-w-[124px] min-h-[124px] gap-3 ">
                  <Image
                    src={fond}
                    width={80}
                    height={80}
                    style={{ height: "80px" }}
                  />
                  <p className=" text-xs text-black">
                    "ФОНД СОДЕЙСТВИЕ ИННОВАЦИЯМ"
                  </p>
                </div>
                <div className=" rounded-lg bg-[#ffffff10] px-3 text-center flex flex-col justify-center items-center min-w-[124px] max-w-[124px] min-h-[124px] gap-3">
                  <Image
                    src={ictis}
                    width={80}
                    height={80}
                    style={{ height: "80px" }}
                  />
                  <p className=" text-xs text-black">
                    "Институт Компьютерных Технологий и Безопасности"
                  </p>
                </div>
                <div className=" rounded-lg bg-[#ffffff10] px-3 text-center flex flex-col justify-center items-center min-w-[124px] max-w-[124px] min-h-[124px]  gap-3">
                  <Image
                    className="!h-[80px]"
                    src={sfedu}
                    width={80}
                    height={80}
                    style={{ height: "80px" }}
                  />
                  <p className=" text-xs text-black">
                    "Южный Федеральный Университет"
                  </p>
                </div>
                <div className=" rounded-lg bg-[#ffffff10] px-3 text-center flex flex-col justify-center items-center min-w-[124px] max-w-[124px] min-h-[124px] gap-3 ">
                  <Image
                    src={kfc}
                    width={80}
                    height={80}
                    style={{ height: "80px" }}
                  />
                  <p className=" text-xs text-black">
                    ООО "БЕЗОПАСНЫЕ ИНФОРМАЦИОННЫЕ СИСТЕМЫ"
                  </p>
                </div>
              </div>
              <div className="bg-transparent p-[45px] text-black rounded-lg   max-h-[298px] overflow-y-auto !flex flex-col-reverse 2xl:!flex-row !items-center justify-between">
                <div className="">
                  <br />
                  Банковские реквизиты:
                  <br />
                  Счет получателя: 40702810900500002689
                  <br />
                  Получатель: ООО"ПРУВАД-ТЕХ" ИНН получателя: 6154165885
                  <br />
                  КПП получателя: 615401001
                  <br />
                  Банк получателя: ПАО КБ "ЦЕНТР-ИНВЕСТ"
                  <br />
                  БИК банк получателя: 046015762
                  <br />
                  Корр. счет банка получателя: 30101810100000000762
                  <br />
                  Генеральный директор: Прудников Вадим Александрович
                </div>
                <div>
                  <Image
                    src={logo}
                    width={635}
                    style={{ height: "80px" }}
                    alt="logo"
                  />
                </div>
              </div>
            </Slider>
          </div>
        </>
      </div>
      <div class="container mx-auto my-8">
        <hr class="border-t-2 border-black w-full" />
      </div>
    </>
  );
};

export default Company;
