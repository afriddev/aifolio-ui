import { postAPI } from "@/ApiServices";
import type { loginRequestType } from "@/types/loginDataTypes";

export function loginAPI(data: loginRequestType) {
  return postAPI("auth/login", data);
}