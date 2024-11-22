import * as React from "react";

const Input = ({ name, label, as = "input", form, ...props }) => {
  const { register, formState } = form;
  const error = formState.errors[name]?.message;

  return (
    <div className="space-y-1">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      {React.createElement(as, {
        ...register(name),
        ...props,
        id: name,
        className: `block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
          error ? "border-red-500" : ""
        }`,
      })}
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export { Input };
