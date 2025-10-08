import { getAPI, postAPI } from "@/ApiServices";
import type {
  generateApiKeyRequestDataType,
  updateApiKeyRequestDataType,
} from "@/types/apiKeysDataTypes";
import type { fileModelDataType } from "@/types/chatDataTypes";

export function getAllApiKeysAPI() {
  return getAPI(`apikeys/all`);
}

export function updateApiKeyAPI(data: updateApiKeyRequestDataType) {
  return postAPI(`apikeys/update/apikey`, data);
}
export function uploadApiKeyFileAPI(data: fileModelDataType) {
  return postAPI(`apikeys/upload/file`, data);
}
export function generateApiKeyAPI(data: generateApiKeyRequestDataType) {
  return postAPI(`apikeys/generate/apikey`, data);
}
export function getApiKeyDataAPI(id: string) {
  return getAPI(`apikeys/apikey/data/${id}`);
}
