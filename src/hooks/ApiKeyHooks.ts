import { useHandleApiResponse } from "@/ApiServices";
import {
  generateApiKeyAPI,
  getAllApiKeysAPI,
  getApiKeyDataAPI,
  updateApiKeyAPI,
  uploadApiKeyFileAPI,
} from "@/services/apiKeysApis";
import type {
  generateApiKeyRequestDataType,
  updateApiKeyRequestDataType,
} from "@/types/apiKeysDataTypes";
import type { fileModelDataType } from "@/types/chatDataTypes";
import { useMutation } from "@tanstack/react-query";

export function useGetAllApiKeysAPI() {
  const { handleToast } = useHandleApiResponse();
  const {
    data,
    isPending,
    mutate: getApiKeys,
  } = useMutation({
    mutationFn: () => getAllApiKeysAPI(),

    onError() {
      handleToast("ERROR");
    },
  });
  return { data, isPending, getApiKeys };
}
export function useUpdateApiKey() {
  const { handleToast } = useHandleApiResponse();
  const {
    data,
    isPending,
    mutate: updateApiKey,
  } = useMutation({
    mutationFn: (data: updateApiKeyRequestDataType) => updateApiKeyAPI(data),

    onError() {
      handleToast("ERROR");
    },
  });
  return { data, isPending, updateApiKey };
}
export function useUploadApiKeyFile() {
  const { handleToast } = useHandleApiResponse();
  const {
    data,
    isPending,
    mutate: uplaodApiKeyFile,
  } = useMutation({
    mutationFn: (data: fileModelDataType) => uploadApiKeyFileAPI(data),

    onError() {
      handleToast("ERROR");
    },
  });
  return { data, isPending, uplaodApiKeyFile };
}
export function useGenerateApiKey() {
  const { handleToast } = useHandleApiResponse();
  const {
    data,
    isPending,
    mutate: generateApiKey,
  } = useMutation({
    mutationFn: (data: generateApiKeyRequestDataType) =>
      generateApiKeyAPI(data),
    onSuccess() {
      handleToast("SUCCESS");
    },
    onError() {
      handleToast("ERROR");
    },
  });
  return { data, isPending, generateApiKey };
}

export function useGetAPiKeyData() {
  const { handleToast } = useHandleApiResponse();
  const {
    data,
    isPending,
    mutate: getApiKeyData,
  } = useMutation({
    mutationFn: ({ id }: { id: string }) => getApiKeyDataAPI(id),
    onSuccess() {
      handleToast("SUCCESS");
    },
    onError() {
      handleToast("ERROR");
    },
  });
  return { data, isPending, getApiKeyData };
}
