import { HttpResponseBody, HttpResponseMessages } from "../response";

export const HttpException = (message: HttpResponseMessages): HttpResponseBody<null> => {
  return {
    ok: false,
    data: null,
    message: message
  };
};