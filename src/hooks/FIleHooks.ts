
import { useHandleApiResponse } from "@/ApiServices";
import { loginAPI } from "@/services/FileApis";
import type { fileModelDataType } from "@/types/ChatDataTypes";
import { useMutation } from "@tanstack/react-query";

export function useUploadFile() {
    const {handleToast} = useHandleApiResponse()
  const {
    data,
    isPending,
    mutate: uploadFile,
  } = useMutation({
    mutationFn: (data: fileModelDataType) => loginAPI(data),
    onSuccess(data) {
        handleToast(data.data)
    }

});

  return { data, isPending, uploadFile };
}