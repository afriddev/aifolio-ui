import { useHandleApiResponse } from "@/ApiServices";
import { getAllApiKeysAPI, updateApiKeyAPI } from "@/services/apiKeysApis";
import type { updateApiKeyRequestDataType } from "@/types/apiKeysDataTypes";
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
