"use client";
import React from "react";

import Image from "next/image";
import qVad from "../../../public/DSC_2346 1.svg";
import q1 from "../../../public/Rectangle 49.png";
import q2 from "../../../public/Rectangle 48.png";
import fond from "../../../public/fond.svg";

import left from "../../../public/Group 50.svg";
import right from "../../../public/Group 49.svg";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return <div></div>;
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return <div></div>;
}

const settings = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

const Logo = () => {
  return (
    <div className="">
      <div className=" flex flex-row px-[60px] lg:px-[120px] bg-[#FFFFFF] pt-[25px] pb-[25px] justify-center ">
        <div className="flex flex-row justify-between items-center pb-[55px]"></div>
        <div className="flex flex-col xl:flex-row items-center gap-[12px] xl:gap-[35px] mt-[100px]">
          <div className="flex flex-col gap-[44px] xl:gap-[96px]">
            <p className="shrink-0 text-[#000000] text-[54px] lg:text-8xl not-italic font-[500] leading-[50px] xl:leading-[136px] w-full xl:w-[200px] ">
              Отечественное мобильное устройство
            </p>

            <div className="w-[60%]">
              <p className=" text-[#000000] text-xs lg:text-base not-italic font-[400] leading-[150%]">
                *Не является средством криптографической защиты информации,
                максимальный размер ключа — не более 56 бит <br /> (Согласно
                постановлению Правительства РФ от 16 апреля 2012 г. N 313)
              </p>
              <p className=" text-[#000000] text-xs lg:text-base not-italic font-[400] leading-[150%]">
                **Для функционирования требуются работоспособные и
                подготовленные системы квантового распределения ключей
              </p>
            </div>
          </div>

          <div className=" z-[10] w-[350px] xl:w-[700px] ">
            <Image className="" src={qVad} alt="pink" />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center text-center px-[60px] lg:px-[120px]">
        <div class="container mx-auto my-8">
          <hr class="border-t-2 border-black w-full" />
        </div>

        <div className="flex justify-center flex-col lg:flex-row items-center gap-[64px]">
          <Image className="" src={fond} alt="pink" />
          <p className="text-[18px] max-w-[800px] leading-[32px] gap-[68px]">
            Проект поддержан Фондом содействия развитию малых форм предприятий в
            научно-технической сфере (Фонд содействия инновациям)
          </p>
        </div>

        <div class="container mx-auto my-8">
          <hr class="border-t-2 border-black w-full" />
        </div>

        <div className="flex relative justify-center">
          <div id="description" />
          <Slider
            {...settings}
            className=" !flex !items-center !gap-3 mx-[100px] my-[40px] max-w-[835px] 2xl:max-w-[1200px]  "
          >
            <div className="bg-transparent !flex !flex-col lg:!flex-row items-center gap-[18px] text-black p-[20px] rounded-lg">
              <div className="w-[360px]">
                <p>
                  Мобильный модуль шифрования для систем квантового
                  распределения ключей — система из двух устройств,
                  предназначенная для создания защищённого канала связи между
                  удалёнными пользователями в рамках открытой сети.
                </p>
              </div>
              <div className=" z-[10] !w-[350px] xl:!w-[536px] ">
                <Image className="" src={qVad} alt="pink" />
              </div>
              <div className="w-[360px]">
                <p>
                  Для работы устройства требуется функционирующая система
                  квантового распределения ключей, например ID Quantique Clavis
                  2.
                </p>
              </div>
            </div>
            <div className="bg-transparent p-[45px] mt-[120px] justify-center text-black rounded-lg !flex gap-3">
              <div className=" flex flex-row gap-[12px] items-center ">
                <Image className="" width={400} src={q1} alt="q1" />
                <p>
                  Система извлекает из СКРК квантовые ключи и использует их для
                  создания защищённого соединения. Безопасность канала связи
                  обеспечена принципами квантовой механики — любая попытка
                  компрометации ключа будет обнаружена, что позволит избежать
                  утечек данных.
                </p>
              </div>
            </div>

            <div className="bg-transparent p-[45px] justify-center mt-[120px] text-black rounded-lg !flex gap-3">
              <div className=" flex flex-row gap-[12px] items-center ">
                <Image className="" width={500} src={q2} alt="q2" />
                <p>
                  Стоит отметить, что устройство не является средством
                  криптографической защиты информации, согласно постановлению
                  Правительства РФ от 16 апреля 2012 г. N 313, так как длина
                  используемых ключей не превышает 56 бит. Настоящее Положение
                  не распространяется на деятельность с использованием: а)
                  шифровальных (криптографических) средств, предназначенных для
                  защиты информации, содержащей сведения, составляющие
                  государственную тайну;
                </p>
              </div>
            </div>
            <div className="bg-transparent p-[45px] text-black rounded-lg  mt-[180px] max-h-[298px] overflow-y-auto">
              <p>
                б) шифровальных (криптографических) средств, а также товаров,
                содержащих шифровальные (криптографические) средства,
                реализующих либо симметричный криптографический алгоритм,
                использующий криптографический ключ длиной, не превышающей 56
                бит, либо ассиметричный криптографический алгоритм, основанный
                либо на методе разложения на множители целых чисел, размер
                которых не превышает 512 бит, либо на методе вычисления
                дискретных логарифмов в мультипликативной группе конечного поля
                размера, не превышающего 512 бит, либо на методе вычисления
                дискретных логарифмов в иной группе размера, не превышающего 112
                бит.
              </p>
            </div>
          </Slider>
        </div>

        <div class="container mx-auto my-8">
          <hr class="border-t-2 border-black w-full" />
        </div>
      </div>
    </div>
  );
};

export default Logo;
