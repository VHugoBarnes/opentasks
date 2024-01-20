import { HttpResponseMessages } from "../response";
import { HttpException } from "./custom.exception";

export const HttpBadRequestException = () => {
  return HttpException(HttpResponseMessages.badRequest);
};