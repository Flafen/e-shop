
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { ADD_TO_CART, DECREASE_ITEM_IN_CART, GET_DATA, LIKE } from "./actionTypes";
import dataJson from "../data.json";

if (!dataJson.men || !dataJson.women) {
    throw new Error(() => {
      console.error("Ошибка при получении данных о товаре.");
    });
  }

const initialState = {
  favorite: [],
  cart: [],
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
      return {
        ...state,
        cards: updatedCards,
        favorite: updatedFavorite
      };

    case ADD_TO_CART:
      let item = state.cards[action.gender].find(item => item.title === action.title)
      let updatedCart;
      
      if(item) {
        const cartItem = state.cart.find(cardItem => cardItem.cardInfo.title === item.title && cardItem.size === action.size);   
        if (cartItem && cartItem.size === action.size) {
          updatedCart = state.cart.map(cartItem =>
            cartItem.cardInfo.title === item.title && cartItem.size === action.size
              ? { ...cartItem, amount: cartItem.amount + 1}
              : cartItem
          );
        } else {
          updatedCart = [...state.cart, {cardInfo: {...item, gender: action.gender}, amount: 1, size: action.size}]
        }} else {
          console.error(`Error... Item is not found!`);
        updatedCart = state.cart
      }
      console.log(updatedCart);
      return {
        ...state,
        cart: updatedCart
      }
    
    case DECREASE_ITEM_IN_CART:
      let decreasedCart;
      let itemInCart = state.cart.find(item => item.size === action.size && item.cardInfo.title === action.title);

      if (itemInCart.amount === 1 || action.deleteAtAll) {
        decreasedCart = state.cart.filter(cartItem => cartItem.size !== action.size || cartItem.cardInfo.title !== action.title)
      } else if (itemInCart.amount > 1) {
        decreasedCart = state.cart.map(cartItem => {
          const isItRightItem = cartItem.size === action.size && cartItem.cardInfo.title === action.title
          if (isItRightItem) {
            return {...cartItem, amount: cartItem.amount - 1}
          } else {
            return cartItem
          } 
        })
      } 
        console.log(decreasedCart);
      return {
        ...state,
        cart: decreasedCart
      }

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
