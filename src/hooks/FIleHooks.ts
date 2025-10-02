import { loginAPI } from "@/services/FileApis";
import type { fileModelDataType } from "@/types/ChatDataTypes";
import { useMutation } from "@tanstack/react-query";

export function useUploadFile() {
  const {
    data,
    isPending,
    mutate: uploadFile,
  } = useMutation({
    mutationFn: (data: fileModelDataType) => loginAPI(data),
  });

  return { data, isPending, uploadFile };
}
