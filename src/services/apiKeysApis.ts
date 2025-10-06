import { getAPI, postAPI } from "@/ApiServices";

export function getAllApiKeys() {
  return getAPI(`apikeys`);
}

export function updateApiKey(id: string) {
  return postAPI(`updateapikey`, { id });
}
