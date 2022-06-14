import MealsImage from "../../../assets/images/meals.jpg";
import HeaderCartButton from "../HeaderCartButton/HeaderCartButton";
import classes from './Header.module.css'
const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart}/>
      </header>
      <div className={classes['main-image']}>
        <img src={MealsImage} alt="table full of delicious food"/>
      </div>
    </>
  );
};
export default Header;
