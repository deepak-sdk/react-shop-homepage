import React from "react";

export const Button = ({ setCart, removeCart }) => {
  //   const [selected, setSelected] = useState(true);

  // const disableBtn = (e) => {

  // };
  return (
    <>
      <button
        onClick={(e) => {
          e.target.disabled = true;
          setCart();
        }}
        className="btn btn-outline-dark mt-auto"
        style={{ margin: "4px" }}
      >
        +
      </button>

      <button
        onClick={(e) => {
          e.target.disabled = true;
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
