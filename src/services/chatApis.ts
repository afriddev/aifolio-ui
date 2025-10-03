import { getAPI } from "@/ApiServices";


export function getAllChatsAPI() {
  return getAPI("allchats");
}
