import React from "react";

export const RemoveFromCart = ({ removeCart, disableButton }) => {
  return (
    <>
      {/* <p>{addToCart}</p> */}
      <button
        onClick={(e) => {
          removeCart();
          disableButton(e);
        }}
        className="btn btn-outline-dark mt-auto"
        style={{ margin: "4px" }}
      >
        -
      </button>
    </>
  );
};
