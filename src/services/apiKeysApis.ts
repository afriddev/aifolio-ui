import { getAPI, postAPI } from "@/ApiServices";
import type { updateApiKeyRequestDataType } from "@/types/apiKeysDataTypes";

export function getAllApiKeysAPI() {
  return getAPI(`apikeys/all`);
}

export function updateApiKeyAPI(data:updateApiKeyRequestDataType) {
  return postAPI(`apikeys/update/apikey`, data);
}
