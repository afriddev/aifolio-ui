import { FiSidebar } from "react-icons/fi";
import { MdOutlineChatBubbleOutline } from "react-icons/md";

import { Avatar } from "@/components/ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import { CiSettings } from "react-icons/ci";
import { useDeleteChat, useGetAllChats } from "@/hooks/chatHooks";
import { useEffect, useRef } from "react";
import { useAppContext } from "./AppContext";
import { truncateText } from "./AppUtils";
import { useNavigate, useParams } from "react-router-dom";
import { LiaKeycdn } from "react-icons/lia";
import { RxDotsVertical } from "react-icons/rx";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { AiOutlineDelete } from "react-icons/ai";

function AppSidebar() {
  const { getAllChats } = useGetAllChats();
  const { allChats, dispatch } = useAppContext();
  const { chatId } = useParams<{ chatId: string }>();
  const navigate = useNavigate();
  const wsRef = useRef<WebSocket | null>(null);
  const { deleteChat } = useDeleteChat();
  const { refresh } = useAppContext();

  const emailId = "afridayan01@gmail.com";

  useEffect(() => {
    getAllChats();
  }, [refresh]);

  useEffect(() => {
    if (!emailId) return;

    const ws = new WebSocket(`ws://localhost:8001/ws/${emailId}`);
    wsRef.current = ws;

    ws.onopen = () => {
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
      console.log("❌ Disconnected");
    };

    ws.onerror = (err) => {
      console.error("⚠️ WebSocket error", err);
    };

    return () => ws.close();
  }, [emailId]);

  return (
    <div className="lg:w-[17vw] h-full overflow-auto max-h-[100vh]  border-r   border-foreground/10 ">
      <div className="w-full h-full p-2 justify-between flex flex-col">
        <div className="flex flex-col w-full h-full ">
          <div className="p-1 justify-between flex items-center">
            <label className="text-xl font-mono">AIFOLIO</label>
            <FiSidebar className="h-10 w-10 cursor-pointer lg:hover:bg-muted p-2 rounded " />
          </div>
          <div>
            <div className="flex flex-col gap-1 pt-5">
              <div
                onClick={() => {
                  navigate(`/`, { state: { reload: true } });
                }}
                className="flex items-center gap-3 justify-between  w-full p-3 lg:hover:bg-muted rounded cursor-pointer"
              >
                <p className=" font-medium">New Chat</p>
                <MdOutlineChatBubbleOutline className="h-4 w-4" />
              </div>
              <div className="flex items-center gap-3 justify-between  w-full p-3 lg:hover:bg-muted rounded cursor-pointer">
                <p className=" font-medium">Api keys</p>
                <LiaKeycdn className="h-5 w-5" />
              </div>
            </div>
          </div>
          <div className="mt-10 ">
            {allChats && allChats.length > 0 && (
              <p className="px-3 text-xs text-foreground/50 uppercase">Chats</p>
            )}

            <div className="mt-2  ">
              {allChats &&
                allChats.map((chat) => (
                  <div
                    onClick={() => {
                      if (chat.id != chatId) {
                        navigate(`/chat/${chat.id}`, {
                          state: {
                            chatId: chat.id,
                            titleGenerated: chat.titleGenerated,
                          },
                        });
                      }
                    }}
                    key={chat.id}
                    className="flex items-center gap-3 justify-between  w-full p-3 lg:hover:bg-muted rounded cursor-pointer text-foreground/80 z-40"
                  >
                    <p className=" font-medium ">
                      {truncateText(chat.title, 32, "...")}
                    </p>
                    <Popover>
                      <PopoverTrigger
                        className="z-50"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <RxDotsVertical className="cursor-pointer" />
                      </PopoverTrigger>
                      <PopoverContent className=" p-1  w-28">
                        <div className="flex flex-col gap-2">
                          <Button
                            onClick={() => {
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
                ))}
            </div>
          </div>
        </div>

        <div className="flex  items-center justify-between cursor-pointer gap-2 shadow border border-foreground/20 lg:hover:shadow-xs lg:hover:bg-muted  rounded p-2 px-4">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src="logo.png" alt="@shadcn" />
            </Avatar>
            <p className=" text-foreground    text-center">Shaik Afrid</p>
          </div>
          <CiSettings className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
}

export default AppSidebar;
