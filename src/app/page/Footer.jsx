import React from "react";
import { TgIcons, VkIcons, YouTubeIcons } from "./ui/icons";
import { PhoneIcons } from "./ui/icons";

const Company = () => {
  return (
    <div className="pt-[60px] pb-[60px] px-[60px] lg:px-[120px] bg-[#f5f1f1] flex flex-col gap-12 ">
      <div className="flex justify-between w-full">
        <div className="">
          <p className="flex flex-row items-center gap-3">
            <span>
              <PhoneIcons />
            </span>{" "}
            +7 (495) 114-55-17
          </p>
          <p>Заказать звонок</p>
        </div>

        <div>
          <div className="flex gap-12 ">
            <div className="flex flex-col">
              <p className="font-bold">E-mail:</p>
              <p>pruvad-tech@yandex.ru</p>
            </div>
            <div className="flex flex-row gap-[33px] items-center">
              <TgIcons />
              <VkIcons />
              <YouTubeIcons />
            </div>
          </div>
        </div>
      </div>

      <div>
        <span className="text-[#3C4950]">© 2023 название</span>
      </div>
    </div>
  );
};

export default Company;
