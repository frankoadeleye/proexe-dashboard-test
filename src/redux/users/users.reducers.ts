import { GET_USERS, CREATE_USER, REMOVE_USER, EDIT_USER } from "redux/users";

interface initProps {
  isGettingUsers: boolean;
  isGotUsers: boolean;
  isFailedToGetUsers: boolean;
  isRemovedUser: boolean;
  response: any;
}

const initialState: initProps = {
  isGettingUsers: false,
  isGotUsers: false,
  isFailedToGetUsers: false,
  isRemovedUser: false,
  response: [],
};

export function UsersReducer(state = initialState, action: any) {
  switch (action.type) {
    case GET_USERS.STARTS:
      return {
        ...state,
        isGettingUsers: true,
        isGotUsers: false,
        isFailedToGetUsers: false,
        isRemovedUser: false,
        response: null,
      };

    case GET_USERS.SUCCESS:
      return {
        ...state,
        isGettingUsers: false,
        isGotUsers: true,
        isRemovedUser: false,
        isFailedToGetUsers: false,
        response: action.payload,
      };

    case GET_USERS.FAILURE:
      return {
        ...state,
        isGettingUsers: false,
        isGotUsers: false,
        isRemovedUser: false,
        isFailedToGetUsers: true,
        response: action.error,
      };

    case CREATE_USER:
      return {
        ...state,
        isGettingUsers: false,
        isGotUsers: true,
        isRemovedUser: false,
        isFailedToGetUsers: false,
        response: [
          ...state.response,
          {
            id: Math.floor(Math.random() * 1000),
            email: action.email,
            name: action.name,
            address: {
              city: action.address,
            },
            username: action.username,
          },
        ],
      };

    case REMOVE_USER:
      return {
        ...state,
        isGettingUsers: false,
        isGotUsers: true,
        isRemovedUser: true,
        isFailedToGetUsers: false,
        response: state.response.filter(
          (value: any, index: any, array: any) =>
            index !==
            array.findIndex((element: any) => element.id === action.id)
        ),
      };

    case EDIT_USER:
      return {
        ...state,
        isGettingUsers: false,
        isGotUsers: true,
        isRemovedUser: false,
        isFailedToGetUsers: false,
        response: state.response.map((content: any) =>
          content.email === action.email
            ? {
                ...content,
                email: action.email,
                name: action.name,
                address: {
                  city: action.address,
                },
                username: action.username,
              }
            : content
        ),
      };

    default:
      return state;
  }
}
