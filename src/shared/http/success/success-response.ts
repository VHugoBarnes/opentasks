import { HttpResponseMessages, HttpResponseBuilder, HttpStatusCode } from "../response";

export const HttpSuccess = <T>(data: T, status = HttpStatusCode.Ok) => {
  return new HttpResponseBuilder<T>({ data: data, message: HttpResponseMessages.success, ok: true }, status).getJson();
};