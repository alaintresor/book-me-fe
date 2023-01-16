import React from "react";

const Button = ({ children, ...rest }) => {
  return (
    <button className="button" {...rest} type="submit">
      {children}
    </button>
  );
};

export default Button;
