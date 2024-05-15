import React from "react";
import schem from "./ui/img/схема.svg";
import { GoGitCommit } from "react-icons/go";
import BankIcons from "./ui/icons";
import Bank from "../../../public/image 10.svg";
import Corp from "../../../public/Vector (3).svg";
import Gos from "../../../public/image 11.svg";
import Image from "next/image";

const HowWork = () => {
  return (
    <div className="mt-[120px] px-[60px] lg:px-[120px] mb-[120px]">
      <div>
        <h2 className="text-[54px] leading-[85.5px] font-medium text-[#0A0459] text-center mb-[34px]">
          Как работать с мобильным модулем:
        </h2>
      </div>
      <div className="flex flex-col gap-4">
        <p>
          1. Собрать топологию, представленную на схеме (Например. В качестве
          оконечных устройств может быть что угодно: другая сеть, сервер, пк, и
          так далее).
        </p>
        <p>
          2. Пользователи корректно настраивают сетевое соединение, согласно
          схеме. Обратите внимание, программно-аппаратные шифраторы должны иметь
          статические IP-адреса, как для внешней сети, так и для внутренней;
        </p>
        <p>
          3. Пользователи (каждый на своей станции) запускают систему квантового
          распределения ключей и синхронизируют её. Далее — запускают генерацию
          ключей;
        </p>
        <p>
          4. Запустить программу "ENwQKD". Настройки выполняются на обоих
          устройствах, с учётом зеркального изменения сетевых настроек:
        </p>
        <div className="flex flex-col gap-3 ml-2">
          <p>1) Задать внешний IP-адрес текущего модуля,</p>
          <p> 2) Задать внешний IP-адрес удалённого модуля,</p>
          <p> 3) Ввести IP-адрес внутренней подсети текущего модуля,</p>
          <p> 4) Ввести IP-адрес внутренней подсети удалённого модуля,</p>
          <p> 5) Указать длину ключа,</p>
          <p> 6) Указать периодичность смены ключа,</p>
          <p> 7) Запустить программу и создать защищённое соединение.</p>
        </div>
      </div>

      <div className=" flex items-center gap-9 flex-col lg:flex-row justify-between mt-[120px]">
        <div className="flex flex-col gap-2 max-w-[320px] bg-gradient-to-b from-[#272b3a] via-[#272b3a] to-[#1DEBEF] justify-center text-center items-center py-[30px]">
          <h4 className="text-[32px] leading-[150%] text-white font-bold ">
            Банки
          </h4>
          <Image className="max-w-[264px]" src={Bank} alt="img" />
          <p className="text-white">
            Применяется для оперативного создания защищённых каналов связи между
            отделениями банка как в пределах одного города, так и области
          </p>
        </div>

        <div className="flex flex-col gap-2 max-w-[320px] bg-gradient-to-b from-[#272b3a] via-[#272b3a] to-[#E65B3F] justify-center text-center items-center py-[30px]">
          <h4 className="text-[32px] leading-[150%] text-white font-bold ">
            Корпорации
          </h4>
          <Image className="max-w-[264px]" src={Corp} alt="img" />
          <p className="text-white">
            Помогает создавать временные и/или постоянные защищённые каналы
            связи между филиалами
          </p>
        </div>

        <div className="flex flex-col gap-2 max-w-[320px] bg-gradient-to-b from-[#272b3a] via-[#272b3a] to-[#DC58A4] justify-center text-center items-center py-[30px]">
          <h4 className="text-[32px] leading-[150%] text-white font-bold ">
            Банки
          </h4>
          <Image className="max-w-[264px]" src={Gos} alt="img" />
          <p className="text-white">
            Применяется для оперативного создания защищённых каналов связи между
            отделениями банка как в пределах одного города, так и области
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowWork;
