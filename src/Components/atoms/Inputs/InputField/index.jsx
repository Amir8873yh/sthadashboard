const InputField = ({ type, placeholder, label, id, formik, disabled = false }) => {
  const { touched, errors, setFieldValue, values } = formik;

  const handleChange = (event) => {
    const { value } = event.target;
    setFieldValue(id, value);
  };

  return (
    <div className="relative">
      <input
        type={type}
        id={id}
        name={id}
        className={`
        ${touched[id] && errors[id] ? "!border-red-500 !bg-gray-100 " : ""}
        rounded-md px-2.5 pb-2.5 pt-5 w-full h-12 text-sm
        text-gray-900 bg-gray-50 border border-black appearance-none
        autofill:bg-gray-50 autofill:text-gray-900 autofill:shadow-[inset_0_0_0px_1000px_rgb(249,250,251)]
       `}
        placeholder={placeholder}
        value={values[id]}
        disabled={disabled}
        onChange={handleChange}
      />
      <label
        htmlFor={id}
        className="absolute text-md text-black dark:text-black duration-300 transform -translate-y-4 scale-75 top-4 origin-[0] left-2.5 peer-focus:text-gray-600 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
      >
        {label}
      </label>
      {touched[id] && errors[id] && <div className="text-red-500 text-sm px-3 py-1 text-left">{errors[id]}</div>}
    </div>
  );
};

export default InputField;
