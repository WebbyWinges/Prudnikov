import React from "react";
import { TgIcons, VkIcons, YouTubeIcons } from "./ui/icons";
import { PhoneIcons } from "./ui/icons";

const Company = () => {
  return (
    <div className="pb-[60px] px-[60px] lg:px-[120px] bg-white flex flex-col gap-12 ">
      <div className="flex justify-between w-full gap-[10px]">
        <div className=" text-black flex flex-col gap-2">
          <p className="flex flex-row items-center gap-3 text-black">
            <span>
              <PhoneIcons />
            </span>{" "}
            +7 (919) 896-14-27
          </p>
          <p>Заказать звонок</p>
        </div>

        <div>
          <div className="flex gap-12 text-black">
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
        <span className="text-black">© 2023 название</span>
      </div>
    </div>
  );
};

export default Company;
