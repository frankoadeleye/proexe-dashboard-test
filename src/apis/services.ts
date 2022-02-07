import axios from "axios";
import { Url } from "apis";

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

const GET_USERS = () => {
  return axios.get(Url.users, { headers });
};

export const NETWORK_CALL = {
  GET_USERS,
};

export default NETWORK_CALL;
