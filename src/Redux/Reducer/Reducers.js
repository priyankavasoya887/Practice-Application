import {ADD_ITEM, REMOVE_ITEM} from '../ActionTypes';

export const Reducers = (state = [], action) => {
  switch (action.type) {
    case ADD_ITEM:
      return [...state, action.payload];

    case REMOVE_ITEM:
      const DeleteArray = state.filter((item, index) => {
        return index !== action.payload;
      });
      return DeleteArray;
    default:
      return state;
  }
};
