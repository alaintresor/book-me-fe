import React from "react";
const Input = (props) => {
  return (
    <div>
      <input
        className={props.className}
        type={props.type}
        name={props.name}
        value={props.value}
        id={props.id}
        onChange={props.onChange}
        placeholder={props.placeholder}
      />
      <ion-icon name={props.icon}></ion-icon>
    </div>
  );
};

export default Input;
