import React from "react";

export const RemoveFromCart = ({ removeCart }) => {
  return (
    <>
      {/* <p>{addToCart}</p> */}
      <button
        onClick={removeCart}
        className="btn btn-outline-dark mt-auto"
        style={{ margin: "4px" }}
      >
        -
      </button>
    </>
  );
};
