import {MealDetailsWrapper} from './MealDetails.style'

const MealDetails = ({label, price}) => {
  return (
    <MealDetailsWrapper>
        <p>{label}</p>
        <span>{`$${price.toFixed(2)}`}</span>
    </MealDetailsWrapper>
  );
};
export default MealDetails;
