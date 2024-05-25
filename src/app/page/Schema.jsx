import React from "react";
import schem from "../../../public/схема (3).svg";
import { GoGitCommit } from "react-icons/go";
import Image from "next/image";

const Schema = () => {
  return (
    <div className="mt-[120px]  px-[60px] lg:px-[120px]">
      <div className="flex  flex-col xl:flex-row items-center justify-center gap-[77px] mb-[30px]">
        <Image src={schem} alt="schem" />
        <div className="flex flex-col gap-[2px]">
          <div>
            <span className="font-[600]">QVad </span> – мобильный модуль
            шифрования для СКРК;
          </div>
          <div>
            <span className="font-[600]">ВОЛС</span> – волоконно-оптическая
            линия связи;
          </div>
          <div className="flex flex-row items-center gap-[4px]">
            <svg
              width="65"
              height="20"
              viewBox="0 0 65 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.3711 2H7.5L2 10L7.5 18H14.3711M14.3711 2L9 10L14.3711 18M14.3711 2H21.5M14.3711 18H21.5M21.5 18L16 10L21.5 2M21.5 18H41.5M21.5 2H41.5M48.5 2H55.5L62.5 10L55.5 18H48.5M48.5 2L55.5 10L48.5 18M48.5 2H41.5M48.5 18H41.5M41.5 18L48.5 10L41.5 2"
                stroke="black"
                stroke-width="3"
              />
            </svg>
            – защищаемый канал связи технологии Gigabit Ethernet 1000 Мбит/с;{" "}
          </div>
          <div className="flex flex-row items-center gap-[4px]">
            <svg
              width="23"
              height="24"
              viewBox="0 0 23 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 2V5.13725V12.3952M21 2L2.00001 22M21 2H11.9236M21 12.3952V17.6863V21.6078H11.5M21 12.3952L11.5 21.6078M2.38776 12.5882V16.1176V21.6078H11.5M2.38776 12.5882V9.05882V2H11.9236M2.38776 12.5882L11.9236 2"
                stroke="black"
                stroke-width="3"
              />
            </svg>
            – канал связи технологии Gigabit Ethernet 1000 Мбит/с;
          </div>
          <div className="flex flex-row items-center gap-[4px]">
            <svg
              width="29"
              height="27"
              viewBox="0 0 29 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M27 20.0392V24.9733V25H15.2989H4L4.46939 24.5306V18.2353V14.1765V10.1176V2H16.0127H27V5.60784V13.9544V20.0392Z"
                fill="black"
              />
              <path
                d="M27 24.9733V20.0392V13.9544M27 2V5.60784V13.9544M27 2L4 25H15.2989M27 2H16.0127M4.46939 24.549V18.2353V14.1765M27 13.9544L15.2989 25M27 13.9544V25H15.2989M4.46939 14.1765V10.1176V2H16.0127M4.46939 14.1765L16.0127 2"
                stroke="white"
                stroke-width="3"
              />
            </svg>
            – сервисный канал связи USB 2.0 300 Мбит/с;
          </div>
          <div className="flex flex-row items-center gap-[4px]">
            <svg
              width="65"
              height="20"
              viewBox="0 0 65 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M50.0227 17.9601L56.0393 18L62.5 10.075L56.0393 2L50.1167 2M50.0227 17.9601L56.0861 10.0414L50.1167 2M50.0227 17.9601L43.6557 18L49.8475 10L43.6557 2H50.1167"
                stroke="black"
                stroke-width="3"
              />
              <path
                d="M14.4773 2.03991L8.46074 2L2 9.92499L8.46074 18H14.3833M14.4773 2.03991L8.41387 9.95861L14.3833 18M14.4773 2.03991L20.8443 2L14.6525 10L20.8443 18H14.3833"
                stroke="black"
                stroke-width="3"
              />
            </svg>
            – одномодовое оптическое волокно.
          </div>
        </div>
      </div>
      <div id="howWork" />
      <div class="container mx-auto my-[120px]">
        <hr class="border-t-2 border-black w-full" />
      </div>
    </div>
  );
};

export default Schema;
