import { useState } from "react";

const PasswordField = ({
  placeholder,
  name,
  handleChange,
  handleBlur,
  value,
  error,
  touched,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col-reverse gap-1 w-full">
      {error && touched && <p className="text-[12px] text-red-500">{error}</p>}
      <div className="w-full relative">
        <input
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
          name={name}
          onChange={handleChange}
          onBlur={handleBlur}
          value={value}
          className={`${
            error && touched ? "border-red-500" : "border-gray-500"
          }   w-full h-[40px] text-sm text-white rounded-[6px] peer bg-gray-500  pl-4 placeholder:text-gray-200 `}
        />
        <span
          onClick={togglePasswordVisibility}
          className="stroke-[#697D95] cursor-pointer absolute top-1/2 transform -translate-y-1/2 right-3"
        >
          {showPassword ? (
            <i className="fa fa-eye-slash"></i> // Replace with your hide password icon
          ) : (
            <i className="fa fa-eye"></i> // Replace with your show password icon
          )}
        </span>
      </div>
      <label
        htmlFor={name}
        className="text-[13px] text-gray-400 font-bold peer-focus:text-yellow-500 after:content-['*'] after:ml-0.5 after:text-red-500"
      >
        {placeholder}
      </label>
    </div>
  );
};

export default PasswordField;
