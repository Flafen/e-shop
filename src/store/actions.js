// actions.js
import { store } from "./store";
import { GET_DATA } from "./actionTypes";

export function getData() {
  store.dispatch({ type: GET_DATA });
}

