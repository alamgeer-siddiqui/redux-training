const initialState = 0;
const updateBaalance = (state = initialState, action) => {
  switch (action.type) {
    case "DEPOSIT":
      return state + action.payload;

    case "WITHDRAW":
      return state - action.payload;
    default:
      return state;
  }
};
export default updateBaalance
