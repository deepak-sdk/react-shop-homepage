import React, { useState } from "react";

export const AddToCartButton = ({ setCart }) => {
  const [selected, setSelected] = useState(true);
  const disableBtn = (e) => {
    e.target.disabled = true;
  };
  return (
    <>
      {/* <p>{addToCart}</p> */}
      <button
        onClick={(e) => {
          selected && disableBtn(e);
          setCart();
        }}
        className="btn btn-outline-dark mt-auto"
        style={{ margin: "4px" }}
      >
        +
      </button>
    </>
  );
};
