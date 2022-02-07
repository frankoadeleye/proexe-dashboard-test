export { default as Url } from "apis/url";
export { default as NETWORK_CALL } from "apis/services";

export interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
}
