import { postAPI } from "@/ApiServices";

export function resetPasswordAPI(data: { token: string; password: string }) {
  return postAPI("auth/resetpassword", data);
}