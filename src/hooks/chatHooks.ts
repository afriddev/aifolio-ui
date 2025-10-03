import { useHandleApiResponse } from "@/ApiServices";
import { useAppContext } from "@/apputils/AppContext";
import { getAllChatsAPI, getChatHistory } from "@/services/chatApis";
import { useMutation } from "@tanstack/react-query";

export function useGetAllChats() {
  const { dispatch } = useAppContext();

  const { handleToast } = useHandleApiResponse();
  const {
    data,
    isPending,
    mutate: getAllChats,
  } = useMutation({
    mutationFn: () => getAllChatsAPI(),
    onSuccess(data) {
      if (data?.data === "SUCCESS") {
        dispatch({ type: "setAllChats", payload: data?.allChats });
      } else {
        handleToast(data?.data);
      }
    },
    onError() {
      handleToast("ERROR");
    },
  });

  return { data, isPending, getAllChats };
}
export function useGetChatHistory() {
  const { handleToast } = useHandleApiResponse();
  const {
    data,
    isPending,
    mutate: getHistory,
  } = useMutation({
    mutationFn: ({ id }: { id: string }) => getChatHistory(id),

    onError() {
      handleToast("ERROR");
    },
  });

  return { data, isPending, getHistory };
}
