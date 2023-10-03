const Form = () => {
  const HandleSubmit = () => {
    console.log("hello world");
  };
  return (
    <div className="w-full py-20">
      <div className="max-w-[500px] mx-auto py-10 bg-blue-300 px-10">
        <form
          onSubmit={HandleSubmit}
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
              className="w-full px-2 py-3 bg-slate-100 outline-none rounded-2xl border-2 border-blue-300 hover:border-blue-700"
              placeholder="Email address.."
              required
            />
            <label htmlFor="email" className="px-1">
              Email address
            </label>
          </div>
          <div className="flex flex-col-reverse gap-5">
            <input
              type="email"
              name="password"
              id="password"
              className="w-full px-2 py-3 bg-slate-100 outline-none rounded-2xl border-2 border-blue-300 hover:border-blue-700"
              placeholder="Password.."
              required
            />
            <label htmlFor="password" className="px-1">
              Password
            </label>
          </div>
          <div className="flex flex-col-reverse gap-5">
            <input
              type="email"
              name="conform_password"
              id="conform_password"
              className="w-full px-2 py-3 bg-slate-100 outline-none rounded-2xl border-2 border-blue-300 hover:border-blue-700"
              placeholder="Conform Password.."
              required
            />
            <label htmlFor="conform_password" className="px-1">
              Conform Password
            </label>
          </div>
          <button
            type="submit"
            onClick={HandleSubmit}
            className="bg-blue-600 px-10 py-3 w-fit text-white rounded-2xl hover:bg-blue-500 border-2 border-blue-300 hover:border-blue-950 "
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
