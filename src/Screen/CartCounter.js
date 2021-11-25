import React from "react";

export const CartCounter = ({ addToCart }) => {
  return (
    <>
      <div className="d-flex">
        <div className="btn btn-outline-dark">
          <i className="bi-cart-fill me-1"></i>
          Cart
          <span class="badge bg-dark text-white ms-1 rounded-pill">
            {addToCart}
          </span>
        </div>
      </div>
    </>
  );
};
