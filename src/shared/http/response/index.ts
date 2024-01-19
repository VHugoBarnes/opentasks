export enum HttpResponseMessages {
  serverError = "[server-error]",
  clientError = "[client-error]",
  success = "[success]",
  userNotFound = "[user-not-found]",
  userAlreadyExists = "[user-already-exists]",
  notFound = "[not-found]",
}

export interface HttpResponseBody<T> {
  ok: boolean;
  message: HttpResponseMessages;
  data: T | null;
};