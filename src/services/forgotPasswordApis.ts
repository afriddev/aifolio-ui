import { postAPI } from "@/ApiServices";

export function forgotPasswordAPI(emailId: string) {
  return postAPI("auth/forgotpassword", {
    emailId,
  });
}