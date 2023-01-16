import createDataContext from "./createDataContext";

const pageReducer = (state, action) => {
  switch (action.type) {
    case "set_page":
      return {...state, page: action.payload};
    default:
      return state;
  }
}

const setPage = dispatch => (page) => {
  dispatch({ type: "set_page", payload: page });
}

export const { Context, Provider } = createDataContext(
  pageReducer,
  { setPage },
  { page: false }
);
