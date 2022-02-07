import { GET_USERS, CREATE_USER, REMOVE_USER, EDIT_USER } from "redux/users";

const GetUsersStart = () => ({
  type: GET_USERS.STARTS,
});

const GetUsersSuccess = (payload: any) => ({
  type: GET_USERS.SUCCESS,
  payload,
});

const GetUsersFailure = (error: any) => ({
  type: GET_USERS.FAILURE,
  error,
});

const CreateUser = (name: any, email: any, address: any, username: any) => ({
  type: CREATE_USER,
  email,
  name,
  address,
  username,
});

const EditUser = (
  id: any,
  name: any,
  email: any,
  address: any,
  username: any
) => ({
  type: EDIT_USER,
  id,
  email,
  name,
  address,
  username,
});

const RemoveUser = (id: any) => ({
  type: REMOVE_USER,
  id,
});

const GetUsersActions = {
  starts: GetUsersStart,
  success: GetUsersSuccess,
  failure: GetUsersFailure,
};

export { GetUsersActions, CreateUser, RemoveUser, EditUser };
