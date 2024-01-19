import { nanoid } from "nanoid";
import validator from "validator";

export const createSlug = (s: string) => {
  const parsedString = validator.escape(s.trim()).replace(/[^\w\s]/gi, "").split(" ").join("-").toLowerCase();

  return `${parsedString}-${nanoid(6)}`;
};