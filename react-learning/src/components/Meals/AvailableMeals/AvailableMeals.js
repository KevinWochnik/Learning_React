import classes from "./AvailableMeals.module.css";
import meals from "../Meals/mealsData";
import Card from "../../UI/Card/Card";
import MealItem from "../MealItem/MealItem";

const AvailableMeals = () => {
  const mealsList = meals.map(({ id, name, description, price }) => (
    <MealItem
      key={id}
      name={name}
      description={description}
      price={price}
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
