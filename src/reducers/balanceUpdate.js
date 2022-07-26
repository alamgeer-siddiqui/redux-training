const initialState = 0;
const updateBaalance = (state = initialState, action) => {
  switch (action.type) {
    case "DEPOSIT":
      return state + 100;

    case "WITHDRAW":
      return state - 100;
    default:
      return state;
  }
};
export default updateBaalance
