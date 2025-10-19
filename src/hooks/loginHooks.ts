import { useHandleApiResponse } from "@/ApiServices";
import { loginAPI } from "@/services/loginApis";
import type { loginRequestType } from "@/types/loginDataTypes";

import { useMutation } from "@tanstack/react-query";

export function useLogin() {
  const { handleToast } = useHandleApiResponse();
  const {
    data,
    isPending,
    mutate: login,
  } = useMutation({
    mutationFn: (data: loginRequestType) => loginAPI(data),
    onSuccess(data) {
      handleToast(data.data);
    },
  });

  return { data, isPending, login };
}
