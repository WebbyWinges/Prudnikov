"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "./ui/img/pruvad-tech 1.svg";
import Link from "next/link";
import { PhoneIcons } from "./ui/icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div
        className={`fixed w-full transition-all duration-200 ease-linear z-[100]`}
      >
        <div className="bg-[#ffff] px-[39px] py-[29px] hidden lg:flex flex-row justify-center lg:justify-between shadow-md">
          <span className="hidden xl:block">
            <Image src={logo} alt="img" />
          </span>
          <div className="flex flex-row gap-[30px] items-center">
            <Link
              href="#description"
              className="text-[#000000] text-base not-italic font-medium leading-[normal]"
            >
              <span>ОПИСАНИЕ</span>
            </Link>
            <Link
              href="#schema"
              className="text-[#000000] text-base not-italic font-medium leading-[normal]"
            >
              <span>СХЕМА</span>
            </Link>
            <Link
              href="#howWork"
              className="text-[#000000] text-base not-italic font-medium leading-[normal]"
            >
              <span>ПРИМЕНЕНИЕ</span>
            </Link>
            <Link
              href="#company"
              className="text-[#000000] text-base not-italic font-medium leading-[normal]"
            >
              <span>КОМПАНИЯ</span>
            </Link>
            <Link
              href="#form"
              className="text-[#000000] text-base not-italic font-medium leading-[normal]"
            >
              <span>СВЯЗАТЬСЯ</span>
            </Link>
            <Link
              href="#contact"
              className="text-[#000000] text-base not-italic font-medium leading-[normal]"
            >
              <span>КОНТАКТЫ</span>
            </Link>
          </div>

          <div className="hidden lg:flex flex-row items-center gap-[4px]">
            <PhoneIcons />
            <div className="flex flex-col">
              <span className="text-[#000000]">+7 (919) 896-14-27</span>
              <div className=" flex flex-row gap-[12px] px-[12px]  text-[#000000] lg:px-[20px]">
                Заказать звонок
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#ffff] px-[39px] py-[29px] flex lg:hidden flex-row justify-end shadow-md">
          <button onClick={() => setIsOpen(!isOpen)} className="text-lg">
            {isOpen ? (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z"
                  fill="currentColor"
                />
              </svg>
            ) : (
              <svg viewBox="0 0 100 80" width="40" height="40">
                <rect width="100" height="20" rx="10"></rect>
                <rect y="30" width="100" height="20" rx="10"></rect>
                <rect y="60" width="100" height="20" rx="10"></rect>
              </svg>
            )}
          </button>
          {isOpen && (
            <div className="absolute right-0 top-full mt-2 w-56 bg-white shadow-lg p-4">
              <Link href="#description" className="block text-black my-2">
                ОПИСАНИЕ
              </Link>
              <Link href="#schema" className="block text-black my-2">
                СХЕМА
              </Link>
              <Link href="#howWork" className="block text-black my-2">
                ПРИМЕНЕНИЕ
              </Link>
              <Link href="#company" className="block text-black my-2">
                КОМПАНИЯ
              </Link>
              <Link href="#form" className="block text-black my-2">
                СВЯЗАТЬСЯ
              </Link>
              <Link href="#contact" className="block text-black my-2">
                КОНТАКТЫ
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
