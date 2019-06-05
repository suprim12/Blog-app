import React from "react";

const InputField = ({
  errors,
  name,
  value,
  change,
  type,
  placeholder,
  ...rest
}) => {
  return (
    <React.Fragment>
      <input
        type={type}
        className={
          errors.type === name ? "is-invalid form-control" : "form-control"
        }
        name={name}
        value={value}
        onChange={change}
        placeholder={placeholder}
        {...rest}
      />
      {errors.type === name ? (
        <span className="invalid-feedback">{errors.msg.toString()}</span>
      ) : (
        ""
      )}
    </React.Fragment>
  );
};

export default InputField;
