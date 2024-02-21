"use client";
import React from "react";
// import { animateScroll as scroll } from "react-scroll";
import Image from "next/image";
import logo from "./ui/img/pruvad-tech 1.svg";
import Link from "next/link";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);

  // const handleClick = () => {
  //   scroll.scrollToTop();
  // };

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Очистка обработчика события при размонтировании компонента
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
        className={`left-[120px] right-[120px] top-[15%] fixed w-max-[1360] !transition-all !duration-200 !ease-linear ${
          isScrolled ? "animate-left-0 animate-right-0 animate-top-0" : ""
        }`}
      >
        <div className="bg-[#ffff] px-[39px] py-[29px] flex flex-row justify-between shadow-md">
          <span className="hidden xl:block	">
            <Image src={logo} alt="img" />
          </span>
          <div className="flex flex-row gap-[30px] items-center">
            <Link
              href="#company"
              className="text-[rgba(10,4,89,0.90)] text-base not-italic font-medium leading-[normal]"
            >
              <span>КОМПАНИЯ</span>
            </Link>
            <Link
              href="#description"
              className="text-[rgba(10,4,89,0.90)] text-base not-italic font-medium leading-[normal]"
            >
              <span>ОПИСАНИЕ</span>
            </Link>
            <Link
              href="#schema"
              className="text-[rgba(10,4,89,0.90)] text-base not-italic font-medium leading-[normal]"
            >
              <span>СХЕМА</span>
            </Link>
            <Link
              href="#howWork"
              className="text-[rgba(10,4,89,0.90)] text-base not-italic font-medium leading-[normal]"
            >
              <span>ПРИМЕНЕНИЕ</span>
            </Link>
            <Link
              href="#form"
              className="text-[rgba(10,4,89,0.90)] text-base not-italic font-medium leading-[normal]"
            >
              <span>СВЯЗАТЬСЯ</span>
            </Link>
            <Link
              href="#contact"
              className="text-[rgba(10,4,89,0.90)] text-base not-italic font-medium leading-[normal]"
            >
              <span>КОНТАКТЫ</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
