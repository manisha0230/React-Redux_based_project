import { ADD_TO_CART } from "../constants";
import { REMOVE_TO_CART } from "../constants";
import { EDIT_TO_CART } from "../constants";
import { EDIT_ADD_TO_CART } from "../constants";

const initialState = {
  cardData: []
};
export default function cardItems(state = [], action) {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, { cardData: action.data }];

    case REMOVE_TO_CART:
      return state.filter((data, i) => i !== action.data.key);
    case EDIT_TO_CART:
      const newArray = [...state]; //making a new array
      newArray[action.data.key].cardData.EmployeeName =
        action.data.EmployeeName;
        newArray[action.data.key].cardData.Role = " ";
        newArray[action.data.key].cardData.Location = " ";
        newArray[action.data.key].cardData.Active = " ";
      newArray[action.data.key].cardData.Role = action.data.Role;
      newArray[action.data.key].cardData.Location = action.data.Location;
      newArray[action.data.key].cardData.Active = action.data.Active;

      return [...state];
      case EDIT_ADD_TO_CART:
        console.log(action.data)
        const newArray1 = [...state]; //making a new array
        newArray1[action.data.key].cardData.EmployeeName =
          action.data.EmployeeName;
        newArray1[action.data.key].cardData.Role = action.data.Role;
        newArray1[action.data.key].cardData.Location = action.data.Location;
        newArray1[action.data.key].cardData.Active = action.data.Active;
  
        return [...state];
  
    default:
      return state;
  }
}
