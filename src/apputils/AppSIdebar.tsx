import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { CiSettings } from "react-icons/ci";
import { useDeleteChat, useGetAllChats } from "@/hooks/chatHooks";
import { useEffect, useRef, useState } from "react";
import { useAppContext } from "./AppContext";
import { truncateText } from "./AppUtils";
import { useNavigate, useParams } from "react-router-dom";
import { RxDotsVertical } from "react-icons/rx";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { AiOutlineDelete } from "react-icons/ai";
import { IoTerminalOutline } from "react-icons/io5";
import { BsChatRight } from "react-icons/bs";
import { IoKeyOutline } from "react-icons/io5";
import { GoTable } from "react-icons/go";
import { VscGraph } from "react-icons/vsc";

function AppSidebar() {
  const { getAllChats } = useGetAllChats();
  const { allChats, dispatch, refresh } = useAppContext();
  const { chatId } = useParams<{ chatId: string }>();
  const navigate = useNavigate();
  const wsRef = useRef<WebSocket | null>(null);
  const { deleteChat } = useDeleteChat();
  const [openDelete, setOpenDelete] = useState<number | null>(null);

  const emailId = "afridayan01@gmail.com";

  useEffect(() => {
    getAllChats();
  }, [refresh]);

  useEffect(() => {
    if (!emailId) return;

    const ws = new WebSocket(`ws://localhost:8001/ws/${emailId}`);
    wsRef.current = ws;

    ws.onopen = () => {
      dispatch({ type: "setWebSocket", payload: ws });
      console.log("✅ Connected as", emailId);
    };

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.type === "chatSummary" || data.type === "chatSummaryUpdate") {
        dispatch({
          type: data.type == "chatSummaryUpdate" ? "updateChat" : "addNewChat",
          payload: {
            id: data.chatId,
            title: data.title,
            titleGenerated: data.titleGenerated,
          },
        });
      }
    };

    ws.onclose = () => {
      dispatch({ type: "setWebSocket", payload: null });
      console.log("❌ Disconnected");
    };

    ws.onerror = (err) => {
      console.error("⚠️ WebSocket error", err);
    };

    return () => ws.close();
  }, [emailId]);

  return (
    <div className="lg:w-[15vw] h-full overflow-auto max-h-[100vh]  border-r   border-foreground/10 ">
      <div className="w-full h-full p-2 justify-between flex flex-col">
        <div className="flex flex-col w-full h-full ">
          <div className="flex  items-center justify-between cursor-pointer gap-2 shadow border border-foreground/20 lg:hover:shadow-xs lg:hover:bg-muted  rounded p-2 ">
            <div className="flex items-center ">
              <Avatar className=" h-8 mr-2">
                <AvatarFallback className="">SA</AvatarFallback>
              </Avatar>
              <p className=" text-foreground ">Shaik Afrid</p>
            </div>
            <CiSettings className="w-6 h-6" />
          </div>
          <div>
            <div className="flex flex-col gap-1 pt-5">
              <div
                onClick={() => {
                  navigate(`/`, { state: { reload: true, replace: true } });
                }}
                className="flex items-center gap-3 justify-between  w-full px-3 py-3 lg:hover:bg-muted rounded cursor-pointer"
              >
                <p className=" font-medium">New Chat</p>
                <BsChatRight className="h-5 w-5" />
              </div>

              <div className="flex items-center gap-3 justify-between  w-full px-3 py-3 lg:hover:bg-muted rounded cursor-pointer">
                <p className=" font-medium">Chat demo</p>
                <IoTerminalOutline className="h-5 w-5" />
              </div>

              <div className="flex items-center gap-3 justify-between  w-full px-3 py-3 lg:hover:bg-muted rounded cursor-pointer">
                <p className=" font-medium">API keys</p>
                <IoKeyOutline className="h-5 w-5" />
              </div>

              <div className="flex items-center gap-3 justify-between  w-full px-3 py-3 lg:hover:bg-muted rounded cursor-pointer">
                <p className=" font-medium">Limits</p>
                <GoTable className="h-5 w-5" />
              </div>

              <div className="flex items-center gap-3 justify-between  w-full px-3 py-3 lg:hover:bg-muted rounded cursor-pointer">
                <p className=" font-medium">Usage</p>
                <VscGraph className="h-5 w-5" />
              </div>
            </div>
          </div>
          <div className="mt-10 ">
            {allChats && allChats.length > 0 && (
              <label className="px-3 text-xs text-foreground/50 ">Chats</label>
            )}

            <div className="mt-2  ">
              {allChats &&
                allChats.map((chat, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      if (chat.id != chatId) {
                        navigate(`/chat/${chat.id}`, {
                          state: {
                            reload: true,
                            chatId: chat.id,
                            titleGenerated: chat.titleGenerated,
                          },
                        });
                      }
                    }}
                    className="flex items-center gap-3 justify-between relative  px-3 py-2 lg:hover:bg-muted/60 rounded cursor-pointer text-foreground/80 "
                  >
                    <p className=" font-medium ">
                      {truncateText(chat.title, 20, "...")}
                    </p>
                    <div className="absolute   cursor-pointer right-2 flex ">
                      <Popover
                        open={openDelete === index}
                        onOpenChange={(value) => {
                          if (value === false) {
                            setOpenDelete(null);
                          }
                        }}
                      >
                        <PopoverTrigger
                          className="z-50 cursor-pointer hover:bg-zinc-100 hover:scale-110   p-2"
                          onClick={(e) => {
                            e.stopPropagation();
                            setOpenDelete(index);
                          }}
                        >
                          <RxDotsVertical className="cursor-pointer" />
                        </PopoverTrigger>
                        <PopoverContent className=" p-1  w-28 shadow-none">
                          <div className="flex flex-col gap-2">
                            <Button
                              onClick={(e) => {
                                e.stopPropagation();
                                setOpenDelete(false);

                                deleteChat({ id: chat.id });
                              }}
                              variant={"ghost"}
                              className="text-left p-2 hover:bg-muted rounded"
                            >
                              <AiOutlineDelete className="text-destructive" />{" "}
                              Delete
                            </Button>
                          </div>
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppSidebar;
