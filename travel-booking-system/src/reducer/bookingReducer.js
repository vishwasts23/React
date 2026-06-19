export const initialState = {
  customerName: "",
  email: "",
  destination: "",
  travelers: "",
  travelDate: "",
};

export function bookingReducer(state, action) {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        [action.field]: action.value,
      };

    case "RESET":
      return initialState;

    default:
      return state;
  }
}