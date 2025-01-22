const initialState = false;

export const isDataReducer = (state = initialState, action) => {
  console.log(action);
  if (action.type === 'isData/CHANGE') {
    return !state;
  } else {
    return state;
  }
};
