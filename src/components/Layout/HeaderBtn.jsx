import { useContext, useEffect, useState } from "react";

import classes from "../Layout/HeaderBtn.module.css";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";

export default function HeaderBtn(props) {
  const [buttonActive, setButtonActive] = useState(false);
  const cartController = useContext(CartContext);

  const numberOfCartItems = cartController.items.reduce(
    (currentNumber, item) => {
      return currentNumber + item.amount;
    },
    0
  );

  const { items } = cartController;

  const btnClass = `${classes.button} ${buttonActive ? classes.bump : ""}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setButtonActive(true);

    setTimeout(() => {
      setButtonActive(false);
    }, 300);
  }, [items]);

  return (
    <button className={btnClass} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
}
