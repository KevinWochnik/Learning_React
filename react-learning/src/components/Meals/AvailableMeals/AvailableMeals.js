import { DUMMY_MEALS as mealsData } from "../../../data/dummyMeals";
import Card from "../../UI/Cart/Card";
import MealItem from "../MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

const AvailableMeals = () => {
  const mealsList = mealsData.map((meal) => <MealItem meal={meal} key={meal.id}/>);
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
