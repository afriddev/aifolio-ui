import { Button } from "@/components/ui/button";
import { MdVerified } from "react-icons/md";
import { LuCopy } from "react-icons/lu";
import { HiOutlineDotsVertical } from "react-icons/hi";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { CiCircleAlert } from "react-icons/ci";
import { RiLoopLeftFill } from "react-icons/ri";
import { MdDataSaverOff } from "react-icons/md";
import { useGetAllApiKeys } from "@/hooks/ApiKeyHooks";
import { useEffect, useState } from "react";
import type { apiKeyDataType } from "@/types/ApiKeysDataTypes";

function ApiKeysMain() {
  const [apiKeys, setApiKeys] = useState<apiKeyDataType[] | undefined>(
    undefined
  );
  const { getApiKeys } = useGetAllApiKeys();

  useEffect(() => {
    if (apiKeys === undefined) {
      getApiKeys();
    }
  }, []);

  return (
    <div className="w-full flex">
      <div className="w-full flex justify-center">
        <div className="w-fit flex flex-col min-w-[60vw] mt-10">
          <div className="flex items-center  justify-between gap-10">
            <div>
              <h3 className="text-2xl font-semibold">API Keys</h3>
            </div>
            <div>
              <Button>Generate API Key</Button>
            </div>
          </div>
          <div className="mt-6 text-foreground/80">
            <p>These API keys allow you to access data for your chat bot </p>
          </div>
          <div className="font-semibold flex shadow rounded-tr-lg rounded-tl-lg mt-5  bg-white p-4 items-center justify-between">
            <div className="w-[10vw]">Name</div>
            <div className="w-[15vw]">API Key</div>
            <div className="w-[10vw]">Created At</div>
            <div className="w-[10vw]">Status</div>
            <div className="w-[5vw]">Actions</div>
          </div>

          <div className=" flex shadow rounded-br-lg rounded-tbl-lg mt-[1px]  bg-white p-4 items-center justify-between">
            <div className="w-[10vw] font-semibold">Shaik afrid resume</div>
            <div className="w-[15vw] font-light flex items-center gap-3">
              csk-r6wv8f...kcnxnwfmej
              <LuCopy className="size-4 cursor-pointer  " />
            </div>
            <div className="w-[10vw] font-light">Oct 6, 2:53pm</div>
            <div className="w-[10vw] font-light flex items-center gap-1">
              Active
              <MdVerified className="text-constructive" />
            </div>
            <div className="w-[5vw] font-light">
              <Popover>
                <PopoverTrigger>
                  <HiOutlineDotsVertical />{" "}
                </PopoverTrigger>
                <PopoverContent className="p-1 w-32  m-0">
                  <div className="flex flex-col gap-1">
                    <Button
                      variant={"ghost"}
                      className="w-full flex  justify-start"
                    >
                      <IoIosRemoveCircleOutline className="size-4 text-destructive" />
                      Disable
                    </Button>

                    <Button
                      variant={"ghost"}
                      className="w-full flex  justify-start"
                    >
                      <IoMdCheckmarkCircleOutline className="size-4 text-constructive" />
                      Enable
                    </Button>

                    <Button
                      variant={"ghost"}
                      className="w-full flex  justify-start"
                    >
                      <MdDataSaverOff className="size-4 " />
                      Data
                    </Button>

                    <Button
                      variant={"ghost"}
                      className="w-full flex  justify-start"
                    >
                      <RiLoopLeftFill className="size-4 " />
                      Retry
                    </Button>
                    <Button
                      variant={"ghost"}
                      className="w-full flex  justify-start"
                    >
                      <MdOutlineDeleteOutline className="size-4 text-destructive" />
                      Delete
                    </Button>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ApiKeysMain;
