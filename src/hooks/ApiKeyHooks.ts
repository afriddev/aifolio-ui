import { useHandleApiResponse } from "@/ApiServices";
import { getAllApiKeys } from "@/services/ApiKeysApis";
import { useMutation } from "@tanstack/react-query";

export function useGetAllApiKeys() {
  const { handleToast } = useHandleApiResponse();
  const {
    data,
    isPending,
    mutate: getApiKeys,
  } = useMutation({
    mutationFn: () => getAllApiKeys(),

    onError() {
      handleToast("ERROR");
    },
  });
  return { data, isPending, getApiKeys };
}
