import { HttpResponseMessages } from "../response";
import { HttpException } from "./custom.exception";

export const HttpNotFoundException = () => {
  return HttpException(HttpResponseMessages.notFound);
};