import { HttpResponseMessages, HttpResponseBuilder, HttpStatusCode } from "../response";

export const HttpException = (message: HttpResponseMessages, status = HttpStatusCode.BadRequest) => {
  return new HttpResponseBuilder<null>({ data: null, message: message, ok: false }, status).getJson();
};