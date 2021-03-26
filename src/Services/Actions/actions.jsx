import { ADD_TO_CART } from "../constants";
import { REMOVE_TO_CART } from "../constants";
import { EDIT_TO_CART } from "../constants";
import { EDIT_ADD_TO_CART } from "../constants";

export const addToCart = (data) => {
  return {
    type: ADD_TO_CART,
    data: data
  };
};
export const removeToCart = (data) => {
  // console.warn("action",data)
  return {
    type: REMOVE_TO_CART,
    data: data
  };
};
export const editAddToCart = (data) => {
  console.warn("action", data);
  return {
    type: EDIT_ADD_TO_CART,
    data: data
  };
};
 export const editToCart = (data) => {
  console.warn("action", data);
  return {
    type: EDIT_TO_CART,
    data: data
  };
 
};
