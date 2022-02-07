import { ALERT } from "./alert.types";

const initialState = {
  type: null,
  open: false,
  message: null,
  redirect: false,
};

export default function AlertReducer(state = initialState, action: any) {
  switch (action.type) {
    case ALERT.SUCCESS:
      return {
        ...state,
        type: "success",
        open: true,
        message: action.payload,
        redirect: false,
      };

    case ALERT.FAILURE:
      return {
        ...state,
        type: "error",
        open: true,
        message: action.payload,
        redirect: false,
      };
    case ALERT.INFO:
      return {
        ...state,
        type: "info",
        open: true,
        message: action.payload,
        redirect: false,
      };
    case ALERT.CLEAR:
      return {
        ...state,
        open: false,
        redirect: true,
      };
    default:
      return state;
  }
}
