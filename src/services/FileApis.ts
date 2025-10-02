import { postAPI } from "@/ApiServices";
import type { fileModelDataType } from "@/types/ChatDataTypes";


export function loginAPI(data: fileModelDataType) {
  return postAPI("upload", data);
}