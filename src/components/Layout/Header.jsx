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
          src="https://nemep.unl.edu/styles/unl_hero_large/public/images/hero/mccain-foods-selection-of-food-header.jpeg?itok=E4If27M3"
          alt="Food"
        />
      </div>
    </div>
  );
}
