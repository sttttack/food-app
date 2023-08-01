import classes from "../Meals/AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem";

const MEALS = [
  {
    id: 1,
    name: "Sushi",
    description: "Asian fusion",
    price: 19.99,
  },
  {
    id: 2,
    name: "BBQ",
    description: "Soul Food",
    price: 29.99,
  },
  {
    id: 3,
    name: "Pizza",
    description: "Italin cuisine",
    price: 91.99,
  },
];

export default function AvailableMeals(props) {
  const list = MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{list}</ul>
      </Card>
    </section>
  );
}
