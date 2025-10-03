import { getAPI } from "@/ApiServices";


export function getAllChatsAPI() {
  return getAPI("allchats");
}
export function getChatHistory(id:string) {
  return getAPI(`chatistory/${id}`);
}
