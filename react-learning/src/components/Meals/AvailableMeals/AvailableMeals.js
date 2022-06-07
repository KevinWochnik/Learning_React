import meals from "../mealsData/mealsData";
import classes from "./AvailableMeals.module.css";
import Card from "../../UI/Card/Card";
import MealItem from "../MealItem/MealItem";

const AvailableMeals = () => {
  const mealsList = meals.map((meal, id) => (
    <MealItem
      key={meal.id}
      name={name}
      description={meal.description}
      price={meal.price}
      id={id}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};
export default AvailableMeals;
