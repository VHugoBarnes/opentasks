import { HttpResponseBody, HttpResponseMessages } from "../response";

export const HttpSuccess = <T>(data: T): HttpResponseBody<T> => {
  return {
    ok: false,
    data: data,
    message: HttpResponseMessages.success
  };
};