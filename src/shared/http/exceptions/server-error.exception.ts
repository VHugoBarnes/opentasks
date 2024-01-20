import { HttpResponseMessages, HttpStatusCode } from "../response";
import { HttpException } from "./custom.exception";

export const HttpServerErrorException = () => {
  return HttpException(HttpResponseMessages.serverError, HttpStatusCode.InternalServerError);
};