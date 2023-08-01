import { useState } from "react";

import CartProvider from "./store/CartProvider";

import "./App.css";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const modalHandler = () => {
    setCartIsShown(true);
  };

  const ModalHandlerOff = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={ModalHandlerOff} />}
      <Header onShow={modalHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
