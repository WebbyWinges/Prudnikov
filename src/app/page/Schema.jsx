import React from "react";
import schem from "./ui/img/схема.svg";
import { GoGitCommit } from "react-icons/go";
import Image from "next/image";

const Schema = () => {
  return (
    <div className="mt-[120px] px-[60px] lg:px-[120px]">
      <div className="flex justify-center mb-[30px]">
        <Image src={schem} alt="schem" />
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex flex-row items-center">
          <span className="text-[25px] text-[#627ada]">
            <GoGitCommit />{" "}
          </span>{" "}
          <span className="font-bold"> F-O c l </span>(Fiber optic communication
          line) - Волоконно-оптическая линия связи
        </div>

        <div className="flex flex-row items-center">
          <span className="text-[25px] text-[#627ada]">
            <GoGitCommit />{" "}
          </span>{" "}
          <span className="font-bold"> A (Alice) </span>― Кодирующая станция
          «Алиса»
        </div>

        <div className="flex flex-row items-center">
          <span className="text-[25px] text-[#627ada]">
            <GoGitCommit />{" "}
          </span>{" "}
          <span className="font-bold"> B</span> (Bob) ― Кодирующая станция «Боб»
        </div>

        <div className="flex flex-row items-center">
          <span className="text-[25px] text-[#627ada]">
            <GoGitCommit />{" "}
          </span>{" "}
          <span className="font-bold"> h-s E </span>(Hardware-software encoder)
          ― Программно-аппаратный шифратор
        </div>

        <div className="flex flex-row items-center">
          <span className="text-[25px] text-[#627ada]">
            <GoGitCommit />{" "}
          </span>{" "}
          <span className="font-bold"> S</span> (Switch) ― Коммутатор
        </div>

        <div className="flex flex-row items-center">
          <span className="text-[25px] text-[#627ada]">
            <GoGitCommit />{" "}
          </span>{" "}
          <span className="font-bold"> PC</span> (Personal Computer) ―
          Персональный компьютер
        </div>

        <div className="flex flex-row items-center">
          <span className="text-[25px] text-[#627ada]">
            <GoGitCommit />{" "}
          </span>{" "}
          <span className="font-bold">IP </span> c (IP camera) ― IP-камера
        </div>
      </div>
    </div>
  );
};

export default Schema;
