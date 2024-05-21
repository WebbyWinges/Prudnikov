import React from "react";
import schem from "./ui/img/схема.svg";
import { GoGitCommit } from "react-icons/go";
import BankIcons from "./ui/icons";
import Bank from "../../../public/88.svg";
import Corp from "../../../public/4.svg";
import Gos from "../../../public/6.svg";
import Image from "next/image";

const HowWork = () => {
  return (
    <div className="mt-[120px] px-[60px] lg:px-[120px] mb-[120px]">
      <div className=" flex items-center gap-9 flex-col lg:flex-row  mt-[120px] justify-center gap-[60px]">
        <div className="flex flex-col gap-2 max-w-[320px] bg-white justify-center text-center items-center py-[30px]">
          <h4 className="text-[32px] leading-[150%] text-black font-bold ">
            Корпорации
          </h4>
          <Image
            className="max-w-[120px] lg:max-w-[264px]"
            src={Corp}
            alt="img"
          />
          <p className="text-black">
            Помогает создавать временные и/или постоянные защищённые каналы
            связи между филиалами
          </p>
        </div>
        <div className="flex flex-col gap-2 max-w-[320px] bg-white justify-center text-center items-center py-[30px]">
          <h4 className="text-[32px] leading-[150%] text-black font-bold ">
            Банки
          </h4>
          <Image
            className="max-w-[120px] lg:max-w-[264px]"
            src={Bank}
            alt="img"
          />
          <p className="text-black">
            Применяется для оперативного создания защищённых каналов связи между
            отделениями банка как в пределах одного города, так и области
          </p>
        </div>

        <div className="flex flex-col gap-2 max-w-[320px] bg-white justify-center text-center items-center py-[30px]">
          <h4 className="text-[32px] leading-[150%] text-black font-bold ">
            Госучреждения
          </h4>
          <Image
            className="max-w-[120px] lg:max-w-[264px]"
            src={Gos}
            alt="img"
          />
          <p className="text-black">
            Позволяет в кратчайшие сроки установить защищённые соединения,
            например, с объектами критической инфраструктуры
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowWork;
