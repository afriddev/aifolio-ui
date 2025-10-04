import { getAPI, postAPI } from "@/ApiServices";

export function getAllChatsAPI() {
  return getAPI("allchats");
}
export function getChatHistoryAPI(id: string) {
  return getAPI(`chatistory/${id}`);
}
export function deleteChatAPI(id: string) {
  return postAPI(`deletechat`, { id });
}
