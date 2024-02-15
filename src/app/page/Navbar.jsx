import React from "react";
import { LogoIcons } from "./ui/icons";
import logo from "./ui/img/pruvad-tech 1.svg";

const Navbar = () => {
  return (
    <div className=" left-[120px] right-[120px] top-[15%] fixed w-max-[1360]">
      <div className="bg-[#f2f2] px-[39px] py-[29px] flex flex-row justify-between">
        <span>
          <img src={logo} alt="img" />
        </span>
        <div className="flex flex-row gap-[30px] items-center">
          <p className="text-[rgba(10,4,89,0.90)] text-base not-italic font-medium leading-[normal]">
            КОМПАНИЯ
          </p>
          <p className="text-[rgba(10,4,89,0.90)] text-base not-italic font-medium leading-[normal]">
            ОПИСАНИЕ
          </p>
          <p className="text-[rgba(10,4,89,0.90)] text-base not-italic font-medium leading-[normal]">
            СХЕМА
          </p>
          <p className="text-[rgba(10,4,89,0.90)] text-base not-italic font-medium leading-[normal]">
            ПРИМЕНЕНИЕ
          </p>
          <p className="text-[rgba(10,4,89,0.90)] text-base not-italic font-medium leading-[normal]">
            СВЯЗАТЬСЯ
          </p>
          <p className="text-[rgba(10,4,89,0.90)] text-base not-italic font-medium leading-[normal]">
            КОНТАКТЫ
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
