import React from "react";
import { ListWrapper } from "./List.styles";
import ListItem from '../ListItem/ListItem'
import { meals } from "../../../data/listData";

const List = () => (

  <ListWrapper>
    {meals.map(meal=><ListItem meal={meal}/>)}
  </ListWrapper>
);
export default List;




//   <div>
//   <h2>Finest fish and veggies</h2>
//   <span>$22.99</span>
//   <form>
//     <label>Amount</label>
//     <input type="number" />
//     <button>+ Add</button>
//   </form>
// </div>
