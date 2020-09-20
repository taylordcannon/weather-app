import { combineReducers, createStore } from "redux";
import throttle from "lodash.throttle";

/* BOARD REDUCER */
const board = (state = { card: [] }, action) => {
    switch (action.type) {
      case "ADD_CARD": {
        const { cardId } = action.payload;
        return { card: [...state.card, cardId] };
      }
      case "MOVE_CARD": {
        const { oldCardIndex, newCardIndex } = action.payload;
        const newCard = Array.from(state.lists);
        const [removedCard] = newCard.splice(oldCardIndex, 1);
        newCard.splice(newCardIndex, 0, removedCard);
        return { card: newCard };
      }
      case "DELETE_CARD": {
        const { cardId } = action.payload;
        const filterDeleted = tmpCardId => tmpCardId !== cardId;
        const newCard = state.card.filter(filterDeleted);
        return { card: newCard };
      }
      default:
        return state;
    }
  };

/* STORE AND PERSISTS */
const reducers = combineReducers({
    board
  });
  
  const saveState = state => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem("state", serializedState);
    } catch {
      // ignore write errors
    }
  };
  
  const loadState = () => {
    try {
      const serializedState = localStorage.getItem("state");
      if (serializedState === null) {
        return undefined;
      }
      return JSON.parse(serializedState);
    } catch (err) {
      return undefined;
    }
  };
  
  const persistedState = loadState();
  const store = createStore(reducers, persistedState);
  
  store.subscribe(
    throttle(() => {
      saveState(store.getState());
    }, 1000)
  );
  
  export default store;