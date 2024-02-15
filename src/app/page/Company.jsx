import React from "react";
import schem from "./ui/img/схема.svg";
import { GoGitCommit } from "react-icons/go";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Company = () => {
  return (
    <div className="pt-[60px] pb-[60px] px-[60px] lg:px-[120px] bg-[#B1B9D8]">
      <h2 className="text-[64px]">О компании</h2>
      <>
        <Tabs
          defaultValue="history"
          className="w-full flex flex-row gap-[50px] justify-start"
        >
          <TabsList className="mt-[8px]">
            <TabsTrigger
              className="text-center text-black bg-transparent data-[state=active]:bg-accentMain data-[state=active]:text-neutral0"
              value="history"
            >
              История
            </TabsTrigger>
            <TabsTrigger
              className="text-center text-black bg-transparent data-[state=active]:bg-accentMain data-[state=active]:text-neutral0"
              value="partner"
            >
              Партнеры
            </TabsTrigger>
            <TabsTrigger
              className="text-center text-black bg-transparent data-[state=active]:bg-accentMain data-[state=active]:text-neutral0"
              value="conditionals"
            >
              Реквизиты
            </TabsTrigger>
          </TabsList>
          <TabsContent value="history">
            <div className="bg-white p-[45px] rounded-lg">
              С 2015 года OOO «КуРэйт» развивает и внедряет технологии
              квантового шифрования в инфраструктуры крупнейших российских
              организаций. Инновационность решений базируется на фундаментальных
              законах физики. QRate уже сегодня создает инструменты, способные
              противостоять новым типам атак на критическую инфраструктуру и
              данные. Компания резидент «Сколково» с 2015 года, а также является
              членом консорциума НТИ «Квантовые коммуникации» и стратегическим
              партнером НИТУ МИСИС с 2018 года. QRate является разработчиком и
              правообладателем программ для электронных вычислительных машин.
            </div>
          </TabsContent>
          <TabsContent value="partner">
            <div className="bg-white p-[45px] rounded-lg">
              С 2015 года OOO «КуРэйт» развивает и внедряет технологии
              квантового шифрования в инфраструктуры крупнейших российских
              организаций. Инновационность решений базируется на фундаментальных
              законах физики. QRate уже сегодня создает инструменты, способные
              противостоять новым типам атак на критическую инфраструктуру и
              данные. Компания резидент «Сколково» с 2015 года, а также является
              членом консорциума НТИ «Квантовые коммуникации» и стратегическим
              партнером НИТУ МИСИС с 2018 года. QRate является разработчиком и
              правообладателем программ для электронных вычислительных машин.
            </div>
          </TabsContent>
          <TabsContent value="conditionals">
            <div className="bg-white p-[45px] rounded-lg">
              <p>
                Ниже приведены реквизиты компании, в случае необходимости
                получения дополнительных документов: свидетельства о
                государственной регистрации, идентификационного номера
                налогоплательщика вы можете обратиться в бухгалтерию
                предприятия.
              </p>
              <p>
                <br />
                Полное наименование: ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ
                "ПРУВАД-ТЕХ"
                <br />
                <br />
                Сокращенное наименование: ООО "ПРУВАД-ТЕХ"
                <br />
                <br />
                ИНН/КПП: 6154165885/615401001
                <br />
                <br />
                ОГРН: 1236100025809
                <br />
                <br />
                Юридический адрес: 347916, Ростовская обл, г Таганрог, ул
                Циолковского, д 30-3, кв 68
                <br />
                <br />
                Фактический адрес: 347916, Ростовская обл, г Таганрог, ул
                Циолковского, д 30-3, кв 68
                <br />
                <br />
                Телефон:+7 (495) 114-55-17
                <br />
                <br />
                Электронная почта: pruvad-tech@yandex.ru
                <br />
                <br />
                Сайт: pruvad-tech.ru
                <br />
                <br />
                Банковские реквизиты:
                <br />
                <br />
                Счет получателя: 40702810900500002689
                <br />
                <br />
                Получатель: ООО"ПРУВАД-ТЕХ" ИНН получателя: 6154165885 КПП
                <br />
                <br />
                получателя: 615401001 Банк получателя: ПАО КБ "ЦЕНТР-ИНВЕСТ" БИК
                <br />
                <br />
                банка получателя: 046015762 Корр. счет банка
                <br /> получателя: 30101810100000000762
                <br />
                <br />
                Генеральный директор: Прудников Вадим Александрович
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </>
    </div>
  );
};

export default Company;
