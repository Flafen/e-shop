// actions.js
import { store } from "./store";
import { GET_DATA, ADD_TO_CART, DECREASE_ITEM_IN_CART } from "./actionTypes";

export function getData() {
  store.dispatch({ type: GET_DATA });
}

export function like(gender, title) {
  store.dispatch({type:"like", gender: gender, id: title})
}

export function addToCart(title, gender, size) {
  store.dispatch({ type: ADD_TO_CART, title: title, gender: gender, size: size })
}

export function decreaseInCart(title, gender, size, deleteAtAll = false) {
  store.dispatch({ type: DECREASE_ITEM_IN_CART, title: title, gender: gender, size: size, deleteAtAll: deleteAtAll })
}