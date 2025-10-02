import { postAPI } from "@/ApiServices";


export function loginAPI(data: any) {
  return postAPI("auth/login", data);
}