import React, { useState } from "react";

export const Button = ({ setCart, removeCart }) => {
  //   const [selected, setSelected] = useState(true);

  const disableBtn = (e) => {
    e.target.disabled = true;
  };
  return (
    <>
      <button
        onClick={(e) => {
          disableBtn(e);
          setCart();
        }}
        className="btn btn-outline-dark mt-auto"
        style={{ margin: "4px" }}
      >
        +
      </button>

      <button
        onClick={(e) => {
          disableBtn(e);
          removeCart();
        }}
        className="btn btn-outline-dark mt-auto"
        style={{ margin: "4px" }}
      >
        -
      </button>
    </>
  );
};
