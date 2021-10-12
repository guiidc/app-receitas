import { SHOW_SEARCHBAR } from "../actions";

const INITIAL_STATE = {
  showSearchBar: false,
  noRecipesFound: false,
};

export default function searchBarReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SHOW_SEARCHBAR:
      return {
        ...state,
        showSearchBar: action.payload,
      };
    default:
      return state;
  }
}