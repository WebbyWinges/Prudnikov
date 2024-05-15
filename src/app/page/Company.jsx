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
        <h2 className="text-[64px] text-black">О компании</h2>
        <>
          <div className="flex relative justify-center">
            <Slider
              {...settings}
              className=" !flex !items-center !gap-3 mx-[100px] my-[40px] max-w-[1200px] "
            >
              <div className="bg-transparent text-black p-[45px] rounded-lg">
                С 2015 года OOO «КуРэйт» развивает и внедряет технологии
                квантового шифрования в инфраструктуры крупнейших российских
                организаций. Инновационность решений базируется на
                фундаментальных законах физики. QRate уже сегодня создает
                инструменты, способные противостоять новым типам атак на
                критическую инфраструктуру и данные. Компания резидент
                «Сколково» с 2015 года, а также является членом консорциума НТИ
                «Квантовые коммуникации» и стратегическим партнером НИТУ МИСИС с
                2018 года. QRate является разработчиком и правообладателем
                программ для электронных вычислительных машин.
              </div>
              <div className="bg-transparent p-[45px] justify-center text-black rounded-lg !flex gap-3">
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
              <div className="bg-transparent p-[45px] text-black rounded-lg   max-h-[298px] overflow-y-auto">
                <p>
                  Ниже приведены реквизиты компании, в случае необходимости
                  получения дополнительных документов: свидетельства о
                  государственной регистрации, идентификационного номера
                  налогоплательщика вы можете обратиться в бухгалтерию
                  предприятия.
                </p>
                <p>
                  <br />
                  Полное наименование: ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ
                  "ПРУВАД-ТЕХ"
                  <br />
                  <br />
                  Сокращенное наименование: ООО "ПРУВАД-ТЕХ"
                  <br />
                  <br />
                  ИНН/КПП: 6154165885/615401001
                  <br />
                  <br />
                  ОГРН: 1236100025809
                  <br />
                  <br />
                  Юридический адрес: 347916, Ростовская обл, г Таганрог, ул
                  Циолковского, д 30-3, кв 68
                  <br />
                  <br />
                  Фактический адрес: 347916, Ростовская обл, г Таганрог, ул
                  Циолковского, д 30-3, кв 68
                  <br />
                  <br />
                  Телефон:+7 (495) 114-55-17
                  <br />
                  <br />
                  Электронная почта: pruvad-tech@yandex.ru
                  <br />
                  <br />
                  Сайт: pruvad-tech.ru
                  <br />
                  <br />
                  Банковские реквизиты:
                  <br />
                  <br />
                  Счет получателя: 40702810900500002689
                  <br />
                  <br />
                  Получатель: ООО"ПРУВАД-ТЕХ" ИНН получателя: 6154165885 КПП
                  <br />
                  <br />
                  получателя: 615401001 Банк получателя: ПАО КБ "ЦЕНТР-ИНВЕСТ"
                  БИК
                  <br />
                  <br />
                  банка получателя: 046015762 Корр. счет банка
                  <br /> получателя: 30101810100000000762
                  <br />
                  <br />
                  Генеральный директор: Прудников Вадим Александрович
                </p>
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
