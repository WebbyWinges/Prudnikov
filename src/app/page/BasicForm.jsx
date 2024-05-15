"use client";
import React from "react";
import axios from "axios";
import { Field, Form, Formik, FormikProps, ErrorMessage } from "formik";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as yup from "yup";
import InputMask from "react-input-mask";

import s from "../styles/forms.module.scss";

const showToastMessage = () => {
  toast.success("Форма отправлена  !", {
    position: toast.POSITION.TOP_RIGHT,
  });
};

const showToastError = () => {
  toast.error("Произошла ошибка", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};

const formSchema = yup.object().shape({
  name: yup.string().required("Укажите имя"),
  nameCompany: yup.string().required("Укажите название кампании"),
  job: yup.string().required("Укажите вашу должность"),
  email: yup
    .string()
    .email("Некорретный адрес почты")
    .required("Укажите свой email"),
  phoneNumber: yup.string().required("Укажите свой номер телефона"),
  questions: yup.string(),
});

const addNewUser = async (values) => {
  try {
    // Проверяем, что номер телефона существует перед обработкой
    let phoneNumber = values.phoneNumber
      ? values.phoneNumber.replace(/\D/g, "")
      : "";
    const newUser = { ...values, phoneNumber }; // Обновляем номер телефона в объекте values
    const response = await axios.post(
      "http://localhost:4444/feedback",
      newUser
    );
    showToastMessage();
    return response.data;
  } catch (err) {
    console.error(err.toJSON());
    showToastError();
  }
};

const BasicForm = () => (
  <div className="">
    <Formik
      initialValues={{
        legalEntity: true,
        name: "",
        nameCompany: "",
        email: "",
        phoneNumber: "",
        questions: "",
        job: "",
      }}
      validationSchema={formSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          addNewUser(values); // Передаем объект values без изменений
          {
            console.log(values);
          }
          setSubmitting(false);
        }, 400);
      }}
      validateOnChange={true}
      validateOnBlur={true}
      className="pb-[120px]"
    >
      {({ isSubmitting }) => (
        <div className={s.forms}>
          <Form className={s.formsik}>
            <h1 className="!text-white text-[40px] text-center">
              Обратная связь
            </h1>
            <ToastContainer />

            <Tabs defaultValue="phis" className="w-full">
              <TabsList className="grid w-full gap-[10px] grid-cols-2 bg-[#ffffff00]">
                <TabsTrigger className=" !bg-white" value="phis">
                  Физическое лицо
                </TabsTrigger>
                <TabsTrigger className=" !bg-white" value="ur">
                  Юридическое лицо
                </TabsTrigger>
              </TabsList>
              <TabsContent value="phis" className="flex flex-col gap-[15px]">
                <Field
                  className=" text-[#5a5959]"
                  type="name"
                  name="name"
                  placeholder="Как к Вам обращаться?"
                  inputProps={{
                    style: {
                      color: "#5a5959",
                    },
                  }}
                />
                <ErrorMessage
                  className="text-[#e05e37]"
                  name="name"
                  component="div"
                />

                <Field
                  className=" text-[#5a5959]"
                  type="email"
                  name="email"
                  placeholder="Почта"
                />
                <ErrorMessage
                  className="text-[#e05e37]"
                  name="email"
                  component="div"
                />
                <Field
                  className=" text-[#5a5959]"
                  type="tel"
                  name="phoneNumber"
                  placeholder="Телефон"
                  as={InputMask}
                  mask="+7(999)999-99-99"
                  maskChar=""
                />
                <ErrorMessage
                  className="text-[#e05e37]"
                  name="phoneNumber"
                  component="div"
                />
                <Field
                  className=" text-[#5a5959]"
                  type="questions"
                  name="questions"
                  placeholder="Вопрос"
                />
                <ErrorMessage
                  className="text-[#e05e37]"
                  name="questions"
                  component="div"
                />
              </TabsContent>
              <TabsContent value="ur" className="flex flex-col gap-[15px]">
                {" "}
                <Field
                  className=" text-[#5a5959] "
                  type="name"
                  name="name"
                  placeholder="Как к Вам обращаться?"
                  inputProps={{
                    style: {
                      color: "#5a5959",
                    },
                  }}
                />
                <ErrorMessage
                  className="text-[#e05e37]"
                  name="name"
                  component="div"
                />
                <Field
                  className=" text-[#5a5959]"
                  type="nameCompany"
                  name="nameCompany"
                  placeholder="Название компании"
                />
                <ErrorMessage
                  className="text-[#e05e37]"
                  name="nameCompany"
                  component="div"
                />
                <Field
                  className=" text-[#5a5959]"
                  type="job"
                  name="job"
                  placeholder="Должность"
                />
                <ErrorMessage
                  className="text-[#e05e37]"
                  name="job"
                  component="div"
                />
                <Field
                  className=" text-[#5a5959]"
                  type="email"
                  name="email"
                  placeholder="Почта"
                />
                <ErrorMessage
                  className="text-[#e05e37]"
                  name="email"
                  component="div"
                />
                <Field
                  className=" text-[#5a5959]"
                  type="tel"
                  name="phoneNumber"
                  placeholder="Телефон"
                  as={InputMask}
                  mask="+7(999)999-99-99"
                  maskChar=""
                />
                <ErrorMessage
                  className="text-[#e05e37]"
                  name="phoneNumber"
                  component="div"
                />
                <Field
                  className=" text-[#5a5959]"
                  type="questions"
                  name="questions"
                  placeholder="Вопрос"
                />
                <ErrorMessage
                  className="text-[#e05e37]"
                  name="questions"
                  component="div"
                />
              </TabsContent>
            </Tabs>

            <button className={s.button} type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        </div>
      )}
    </Formik>
  </div>
);

export default BasicForm;
