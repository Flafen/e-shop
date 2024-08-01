
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { GET_DATA, LIKE } from "./actionTypes";
import dataJson from "../data.json";

if (!dataJson.men || !dataJson.women) {
    throw new Error(() => {
      console.error("Ошибка при получении данных о товаре.");
    });
  }

const initialState = {
  favorite: [],
  cards: {
    men: dataJson.men,
    women: dataJson.women
  }
};

const cardDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
      return state
    case LIKE:
      const updLikeByID = (title, gender) => state.cards[gender].map(item =>
        item.title === title ? { ...item, liked: !item.liked } : item
      );

      const updatedGender = action.gender;
      const otherGender = updatedGender === "men" ? "women" : "men";

      const updatedCards = {
        [otherGender]: state.cards[otherGender],
        [updatedGender]: updLikeByID(action.id, action.gender)
      };

      const itemToToggle = updatedCards[updatedGender].find(item => item.title === action.id);

      let updatedFavorite;
      if (itemToToggle.liked && !state.favorite.find(item => item.title === action.id)) {
        updatedFavorite = [...state.favorite, { ...itemToToggle, gender: updatedGender }];
      } else {
        updatedFavorite = state.favorite.filter(item => item.title !== action.id);
      }
      console.log(updatedFavorite);
      return {
        ...state,
        cards: updatedCards,
        favorite: updatedFavorite
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  cardData: cardDataReducer
});

export const store = configureStore({
  reducer: rootReducer
});
