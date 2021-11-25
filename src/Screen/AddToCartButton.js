import React from "react";

export const AddToCartButton = ({ setCart }) => {
  return (
    <>
      {/* <p>{addToCart}</p> */}
      <button
        onClick={() => {
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
