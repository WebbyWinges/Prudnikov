// // Render Prop
// import React from "react";
// import axios from "axios";
// import { Field, Form, Formik, FormikProps } from "formik";

// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// import s from "../styles/forms.module.scss";

// const showToastMessage = () => {
//   toast.success("Форма отправлена  !", {
//     position: toast.POSITION.TOP_RIGHT,
//   });
// };

// const showToastError = () => {
//   toast.error("Произошла ошибка", {
//     position: "top-right",
//     autoClose: 5000,
//     hideProgressBar: false,
//     closeOnClick: true,
//     pauseOnHover: true,
//     draggable: true,
//     progress: undefined,
//     theme: "light",
//   });
// };

// const addNewUser = async (newUser) => {
//   try {
//     const response = await axios.post("/users", newUser);
//     showToastMessage();
//     return response.data;
//   } catch (err) {
//     console.error(err.toJSON());
//     showToastError();
//   }
// };

// const BasicForm = () => (
//   <div>
//     <Formik
//       initialValues={{
//         name: "",
//         nameCompany: "",
//         email: "",
//         phoneNumber: "",
//         questions: "",
//       }}
//       validate={(values) => {
//         const errors = {};
//         if (!values.email) {
//           errors.email = "Required";
//         } else if (
//           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
//         ) {
//           errors.email = "Invalid email address";
//         }
//         return errors;
//       }}
//       onSubmit={(values, { setSubmitting }) => {
//         setTimeout(() => {
//           alert(JSON.stringify(values, null, 2));
//           addNewUser(values);
//           setSubmitting(false);
//         }, 400);
//       }}
//     >
//       {({ isSubmitting }) => (
//         <Form className={s.forms}>
//           <h1>Обратная связь</h1>
//           <ToastContainer />
//           <Field type="name" name="name" placeholder="Name" />
//           <Field
//             type="nameCompany"
//             name="nameCompany"
//             placeholder="NameCompany"
//           />
//           <Field type="email" name="email" placeholder="Email" />
//           <ErrorMessage name="email" component="div" />
//           <Field type="tel" name="phoneNumber" placeholder="PhoneNumber" />
//           <Field type="questions" name="questions" placeholder="Questions" />
//           <button type="submit" disabled={isSubmitting}>
//             Submit
//           </button>
//         </Form>
//       )}
//     </Formik>
//   </div>
// );

// export default BasicForm;
