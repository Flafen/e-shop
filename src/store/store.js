import { configureStore, combineReducers } from "@reduxjs/toolkit";
import dataJson from "../data.json";

const initialState = {
    cards: {
        men: [],
        women: []
    }
};

const cardDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case "getData":
            if (dataJson.men && dataJson.women) {
                return {
                    ...state,
                    cards: {
                        men: dataJson.men,
                        women: dataJson.women
                    }
                };
            } else {
                throw new Error(() => {
                    console.log("Ошибка при получении данных о товаре.");
                });
            }
        case "like":
            console.log(`Liked ${action.gender}`)
            
            const updLikeByID = (id, gender) => state.cards[gender].map(item => item.id !== id ? item : { ...item, liked: !item.liked })
            
            if (action.gender==="men") {
                return {
                    ...state,
                    cards: {
                        women: state.cards.women,
                        men: updLikeByID(action.id, action.gender)
                    }
                }
            } else if (action.gender==="women") {
                return {
                    ...state,
                    cards: {
                        men: state.cards.men,
                        women: updLikeByID(action.id, action.gender)
                    }
                }
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
