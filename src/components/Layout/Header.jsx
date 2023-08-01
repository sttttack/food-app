import classes from "../Layout/Header.module.css";

import HeaderBtn from "./HeaderBtn";

export default function Header(props) {
  return (
    <div>
      <header className={classes.header}>
        <h1>Pollo Meals</h1>
        <HeaderBtn onClick={props.onShow} />
      </header>
      <div>
        <img
          className={classes["main-image"]}
          src="https://images.squarespace-cdn.com/content/v1/5a90252eda02bc96f23b007a/1519996100608-UH81HHXCYG6XXKHIXNXD/Food_header.jpg?format=2500w"
          alt="Food"
        />
      </div>
    </div>
  );
}
