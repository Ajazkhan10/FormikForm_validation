import { useEffect, useState } from "react";
import { validateSchema } from "./schema";
import { useFormik } from "formik";
import clsx from "clsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const INITIAL_STATE = {
  email: "",
  password: "",
  confirmPassword: "",
};

const Form = () => {
  const [error, setError] = useState("");

  const {
    values,
    errors,
    handleChange,
    handleSubmit,
    handleBlur,
    touched,
    isSubmitting,
  } = useFormik({
    initialValues: INITIAL_STATE,
    validationSchema: validateSchema,
    onSubmit: (values, { resetForm }) => {
      if (error) {
        setError(errors);
      } else {
        console.log(values);
        setTimeout(() => {
          resetForm();
        }, 1000);
      }
    },
  });

  useEffect(() => {
    if (errors) {
      if (errors.email) {
        toast(errors.email);
      } else if (errors.password) {
        toast(errors.password);
      } else if (errors.confirmPassword) {
        toast(errors.confirmPassword);
      }
    }
  }, [errors]);

  return (
    <div className="w-full py-20">
      <div className="max-w-[500px] mx-auto py-10 bg-blue-300 px-10">
        <ToastContainer />
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(e);
          }}
          className="flex flex-col gap-10 font-mono font-bold"
        >
          <h1 className="text-xl text-center w-full bg-blue-600 text-white px-2 py-3 rounded-xl">
            Form Validation Using Yup And Formik
          </h1>
          <div className="flex flex-col-reverse gap-5">
            <input
              type="email"
              name="email"
              id="email"
              onBlur={handleBlur}
              value={values.email}
              onChange={handleChange}
              className={clsx(
                "w-full px-2 py-3 bg-slate-100 outline-none rounded-2xl border-2 border-blue-300 hover:border-blue-700",
                touched.email && errors.email ? "border-red-500 border-2" : ""
              )}
              placeholder="Email address.."
              required
            />
            <label htmlFor="email" className="px-1">
              Email address
            </label>
          </div>
          <div className="flex flex-col-reverse gap-5">
            <input
              type="password"
              name="password"
              id="password"
              onBlur={handleBlur}
              value={values.password}
              onChange={handleChange}
              className={clsx(
                "w-full px-2 py-3 bg-slate-100 outline-none rounded-2xl border-2 border-blue-300 hover:border-blue-700",
                touched.password && errors.password
                  ? "border-red-500 border-2"
                  : ""
              )}
              placeholder="Password.."
              required
            />
            <label htmlFor="password" className="px-1">
              Password
            </label>
          </div>
          <div className="flex flex-col-reverse gap-5">
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              onBlur={handleBlur}
              value={values.confirmPassword}
              onChange={handleChange}
              className={clsx(
                "w-full px-2 py-3 bg-slate-100 outline-none rounded-2xl border-2 border-blue-300 hover:border-blue-700",
                touched.confirmPassword && errors.confirmPassword
                  ? "border-red-500 border-2"
                  : ""
              )}
              placeholder="Conform Password.."
              required
            />
            <label htmlFor="confirmPassword" className="px-1">
              Conform Password
            </label>
          </div>
          <button
            type="submit"
            className="bg-blue-600 px-10 py-3 w-fit text-white rounded-2xl hover:bg-blue-500 border-2 border-blue-300 hover:border-blue-950 "
          >
            {isSubmitting ? "Loading..." : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
