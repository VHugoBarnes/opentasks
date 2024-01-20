export enum HttpResponseMessages {
  serverError = "[server-error]",
  clientError = "[client-error]",
  success = "[success]",
  userNotFound = "[user-not-found]",
  userAlreadyExists = "[user-already-exists]",
  notFound = "[not-found]",
  badRequest = "[bad-request]"
}

export enum HttpStatusCode {
  Ok = 200,
  Created = 201,
  BadRequest = 400,
  Unauthorized = 401,
  Forbidden = 403,
  NotFound = 404,
  InternalServerError = 500,
  ServiceUnavailable = 503,
};

export interface HttpResponseBody<T> {
  ok: boolean;
  message: HttpResponseMessages;
  data: T | null;
};

export class HttpResponseBuilder<T> {
  constructor(
    private body: HttpResponseBody<T>,
    private statusCode: HttpStatusCode
  ) { }

  getJson() {
    return Response.json(this.body, { status: this.statusCode });
  }
}