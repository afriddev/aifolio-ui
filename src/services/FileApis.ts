import {  postAPI } from "@/ApiServices";
import type { fileModelDataType } from "@/types/chatDataTypes";


export function loginAPI(data: fileModelDataType) {
  return postAPI("upload", data);
}
