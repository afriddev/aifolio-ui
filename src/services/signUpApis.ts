import { postAPI } from "@/ApiServices";
import type { signUpRequestType } from "@/types/signUpDataTypes";


export function signUpAPI(data: signUpRequestType) {
  return postAPI("auth/signup", data);
}