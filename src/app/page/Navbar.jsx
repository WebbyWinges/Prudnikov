"use client";
import React from "react";
// import { animateScroll as scroll } from "react-scroll";
import Image from "next/image";
import logo from "./ui/img/pruvad-tech 1.svg";
import Link from "next/link";
import { PhoneIcons } from "./ui/icons";

const Navbar = () => {
  // const [isScrolled, setIsScrolled] = React.useState(false);

  // // const handleClick = () => {
  // //   scroll.scrollToTop();
  // // };

  // React.useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 20) {
  //       setIsScrolled(true);
  //     } else {
  //       setIsScrolled(false);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   // Очистка обработчика события при размонтировании компонента
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <div>
      <style>{`
      .animate-left-0 {
        transition: left 0.3s ease-in-out;
        left: 0 !important;
      }

      .animate-right-0 {
        transition: right 0.3s ease-in-out;
        right: 0 !important;
      }

      .animate-top-0 {
        transition: top 0.3s ease-in-out;
        top: 0 !important;
      }
    `}</style>
      <div
        className={` top-[0] fixed w-full !transition-all !duration-200 !ease-linear z-[100] }`}
      >
        <div className="bg-[#ffff] px-[39px] py-[29px] flex flex-row justify-between shadow-md">
          <span className="hidden xl:block	">
            <Image src={logo} alt="img" />
          </span>
          <div className="flex flex-row gap-[30px] items-center">
            <Link
              href="#company"
              className="text-[#000000] text-base not-italic font-medium leading-[normal]"
            >
              <span>КОМПАНИЯ</span>
            </Link>
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

          <div className="flex flex-row items-center gap-[4px]">
            <PhoneIcons />
            <div className="flex flex-col">
              <span className="text-[#000000]">+7 (495) 114-55-17</span>
              <div className=" flex flex-row gap-[12px] px-[12px]  text-[#000000] lg:px-[20px]">
                Заказать звонок
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
