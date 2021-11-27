import React, { useState } from "react";
import { Nav } from "./Screen/Nav";
import { Header } from "./Screen/Header";
import { Section } from "./Screen/Section";
import { Footer } from "./Screen/Footer";
import "./App.css";

function App() {
  const [addToCart, setAddToCart] = useState(0);
  const [disable, setDisable] = useState(true);

  const setCart = () => {
    setAddToCart(addToCart + 1);
  };

  const disableBtn = (e) => {
    e.target.disabled = setDisable(disable);
  };

  const removeCart = () => {
    setAddToCart(addToCart > 0 ? addToCart - 1 : +0);
  };

  return (
    <div className="App">
      <Nav addToCart={addToCart} />
      <Header />
      <Section
        addToCart={addToCart}
        setCart={setCart}
        removeCart={removeCart}
        disableButton={disableBtn}
      />
      <Footer />
    </div>
  );
}

export default App;
