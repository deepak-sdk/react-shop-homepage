import React from "react";

export const AddToCartButton = ({ setCart, disableButton }) => {
  return (
    <>
      {/* <p>{addToCart}</p> */}
      <button
        onClick={(e) => {
          setCart();
          disableButton(e);
        }}
        className="btn btn-outline-dark mt-auto"
        style={{ margin: "4px" }}
      >
        +
      </button>
    </>
  );
};
