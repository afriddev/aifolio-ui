

import { useHandleApiResponse } from "@/ApiServices";
import { signUpAPI } from "@/services/signUpApis";
import type { signUpRequestType } from "@/types/signUpDataTypes";
import { useMutation } from "@tanstack/react-query";

export function useSignUp() {
    const {handleToast} = useHandleApiResponse()
  const {
    data,
    isPending,
    mutate: signUp,
  } = useMutation({
    mutationFn: (data: signUpRequestType) => signUpAPI(data),
    onSuccess(data) {
        handleToast(data.data)
    }

});

  return { data, isPending, signUp };
}