import { useHandleApiResponse } from "@/ApiServices";
import { useAppContext } from "@/apputils/AppContext";
import {
  deleteChatAPI,
  getAllChatsAPI,
  getChatHistoryAPI,
} from "@/services/chatApis";
import { useMutation } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";

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
    mutationFn: ({ id }: { id: string }) => getChatHistoryAPI(id),

    onError() {
      handleToast("ERROR");
    },
  });

  return { data, isPending, getHistory };
}
export function useDeleteChat() {
  const { handleToast } = useHandleApiResponse();
  const { dispatch } = useAppContext();
  const navigate = useNavigate();
  const { chatId } = useParams<{ chatId: string }>();
  const {
    data,
    isPending,
    mutate: deleteChat,
  } = useMutation({
    mutationFn: ({ id }: { id: string }) => deleteChatAPI(id),
    onSuccess(data) {
      if (data?.data === "SUCCESS") {
        dispatch({ type: "setRefresh", payload: "" });
        if (chatId === data?.id) {
          navigate(`/`, { state: { reload: true } });
        }
      } else {
        handleToast(data?.data);
      }
    },

    onError() {
      handleToast("ERROR");
    },
  });
  return { data, isPending, deleteChat };
}
