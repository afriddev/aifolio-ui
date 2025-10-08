/* eslint-disable @typescript-eslint/no-explicit-any */
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
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { BiError } from "react-icons/bi";
import { RiLoopLeftFill } from "react-icons/ri";
import { MdDataSaverOff } from "react-icons/md";
import {
  useGetAllApiKeysAPI,
  useGetAPiKeyData,
  useUpdateApiKey,
} from "@/hooks/ApiKeyHooks";
import { useEffect, useState } from "react";
import type { apiKeyDataType } from "@/types/apiKeysDataTypes";
import { getFormattedDate, maskApiKey } from "@/apputils/AppUtils";
import { MdDoNotDisturb } from "react-icons/md";
import { FaRegCircleXmark } from "react-icons/fa6";
import { Alert, AlertTitle } from "@/components/ui/alert";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { useAppContext } from "@/apputils/AppContext";
import GenerateApiKeyDialog from "./GenerateApiKeyDialog";
import ApiKeyDataDialog from "./ApiKeyDataDialog";

function ApiKeysMain() {
  const [apiKeys, setApiKeys] = useState<apiKeyDataType[] | undefined>(
    undefined
  );
  const { getApiKeys } = useGetAllApiKeysAPI();
  const { updateApiKey } = useUpdateApiKey();
  const [copied, setCopied] = useState<boolean>(false);
  const { webSocket } = useAppContext();
  const [openGenerateApiKeyDialog, setOpenGenerateApiKeyDialog] =
    useState<boolean>(false);
  const { getApiKeyData } = useGetAPiKeyData();
  const [openKeyDataDialog, setOpenKeyDataDialog] = useState<boolean>(false);
  const [keyData, setKeyData] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (apiKeys === undefined) {
      getApiKeys(undefined, {
        onSuccess(data) {
          if (data?.data === "SUCCESS") {
            setApiKeys(data?.keys?.length > 0 ? data?.keys : []);
          }
        },
      });
    }
    if (keyData) {
      setOpenKeyDataDialog(true);
    }
  }, [keyData]);

  useEffect(() => {
    if (!webSocket) return;
    webSocket.onmessage = (e) => {
      const data = JSON.parse(e.data);
      if (data?.type === "ADD_API_KEY") {
        const keyData: apiKeyDataType = {
          createdAt: data?.createdAt,
          disabled: data?.disabled,
          id: data?.id,
          key: data?.key,
          name: data?.name,
          status: data?.status,
          deleted: data?.deleted,
        };
        setApiKeys((prev) => (prev ? [keyData, ...prev] : [keyData]));
      }
      if (data?.type === "UPDATE_API_KEY") {
        setApiKeys((prev) =>
          prev?.map((key) =>
            key.id === data.id ? { ...key, status: data.status } : key
          )
        );
      }
    };
  }, [webSocket]);

  function handleGenerateApiKeyDialog() {
    setOpenGenerateApiKeyDialog(false);
  }

  function handleCloseKeyDataDialog() {
    setKeyData(undefined);
    setOpenKeyDataDialog(false);
  }

  function handleUpdateApiKey(
    index: number,
    method: "ENABLE" | "DISABLE" | "DELETE"
  ) {
    if (apiKeys)
      updateApiKey(
        {
          id: apiKeys[index].id,
          method: method,
        },
        {
          onSuccess(data) {
            if (data?.data === "SUCCESS") {
              if (method !== "DELETE") {
                const updatedKeys = apiKeys?.map((key, idx) =>
                  idx === index ? { ...key, status: data.status } : key
                );
                setApiKeys(updatedKeys);
              }
              if (method === "DISABLE") {
                const updatedKeys = apiKeys?.map((key, idx) =>
                  idx === index
                    ? { ...key, disabled: true, status: "DISABLED" as any }
                    : key
                );
                setApiKeys(updatedKeys);
              }

              if (method === "ENABLE") {
                const updatedKeys = apiKeys?.map((key, idx) =>
                  idx === index
                    ? { ...key, disabled: false, status: "ACTIVE" as any }
                    : key
                );
                setApiKeys(updatedKeys);
              }
            }
          },
        }
      );
  }

  function handleApiKeyDataClick(index: number) {
    getApiKeyData(
      { id: apiKeys ? apiKeys[index].id : "" },
      {
        onSuccess(data) {
          setKeyData(data?.keyData);
        },
      }
    );
  }

  return (
    <div className="w-full flex">
      <div className="w-full flex justify-center">
        <div className="w-fit flex flex-col min-w-[60vw] mt-10">
          <div className="flex items-center  justify-between gap-10">
            <div>
              <h3 className="text-2xl font-semibold">API Keys</h3>
            </div>
            <div>
              <Button
                onClick={() => {
                  setOpenGenerateApiKeyDialog(true);
                }}
              >
                Generate API Key
              </Button>
            </div>
          </div>

          {copied && (
            <Alert className="mt-5" variant="constructive">
              <IoCheckmarkCircleOutline className="w-5 h-5" />
              <AlertTitle>Copied API key to clipboard.</AlertTitle>
            </Alert>
          )}
          <div className="mt-6 text-foreground/80">
            <p>
              These API keys provide programmatic access to your data through
              the AiFolio library.{" "}
            </p>
          </div>
          <div className="font-semibold flex shadow rounded-tr-lg rounded-tl-lg mt-5  bg-white p-4 items-center justify-between">
            <div className="w-[10vw] ">Name</div>
            <div className="w-[15vw] ">API Key</div>
            <div className="w-[10vw]">Created At</div>
            <div className="w-[10vw]">Status</div>
            <div className="w-[5vw]">Actions</div>
          </div>
          {apiKeys?.map((key, index) => {
            return (
              <div
                key={index}
                className=" flex shadow rounded-br-lg rounded-tbl-lg mt-[1px]  bg-white p-4 items-center justify-between"
              >
                <div className="w-[10vw]  font-semibold">
                  {key.status === "ERROR" ? "-" : key.name}
                </div>
                <div className="w-[15vw] font-light flex items-center gap-3">
                  {maskApiKey(key.key)}
                  {copied ? (
                    <IoCheckmarkCircleOutline
                      aria-label="Copied"
                      className="size-4 text-constructive"
                    />
                  ) : (
                    <LuCopy
                      aria-label="Copy"
                      onClick={async () => {
                        await navigator.clipboard.writeText(
                          key.key ? key.key : ""
                        );
                        setCopied(true);
                        setTimeout(() => setCopied(false), 3000);
                      }}
                      className="size-4 cursor-pointer  "
                    />
                  )}
                </div>
                <div className="w-[10vw] font-light">
                  {getFormattedDate(key.createdAt)}
                </div>
                {key.status === "ACTIVE" ? (
                  <div className="w-[10vw] font-semibold text-constructive flex items-center gap-1">
                    Active
                    <MdVerified className="" />
                  </div>
                ) : key.status === "PENDING" ? (
                  <div className="w-[10vw] font-semibold text-orange-500 flex items-center gap-1">
                    Pending
                    <BiError className="" />
                  </div>
                ) : key.status === "DISABLED" ? (
                  <div className="w-[10vw] font-semibold text-destructive flex items-center gap-1">
                    Disabled
                    <MdDoNotDisturb className="text-destructive" />
                  </div>
                ) : (
                  <div className="w-[10vw] font-semibold text-destructive flex items-center gap-1">
                    Error
                    <FaRegCircleXmark className="text-destructive" />
                  </div>
                )}

                <div className="w-[5vw] font-light">
                  <Popover>
                    <PopoverTrigger>
                      <HiOutlineDotsVertical />{" "}
                    </PopoverTrigger>
                    <PopoverContent className="p-1 w-32  m-0">
                      <div className="flex flex-col gap-1">
                        {key.disabled ? (
                          <Button
                            onClick={() => {
                              handleUpdateApiKey(index, "ENABLE");
                            }}
                            variant={"ghost"}
                            className="w-full flex  justify-start"
                          >
                            <IoMdCheckmarkCircleOutline className="size-4 text-constructive" />
                            Enable
                          </Button>
                        ) : (
                          <Button
                            onClick={() => {
                              handleUpdateApiKey(index, "DISABLE");
                            }}
                            variant={"ghost"}
                            className="w-full flex  justify-start"
                          >
                            <MdDoNotDisturb className="size-4 text-destructive" />
                            Disable
                          </Button>
                        )}

                        <Button
                          onClick={() => {
                            handleApiKeyDataClick(index);
                          }}
                          variant={"ghost"}
                          className="w-full flex  justify-start"
                        >
                          <MdDataSaverOff className="size-4 " />
                          Data
                        </Button>

                        {key.status === "ERROR" && (
                          <Button
                            variant={"ghost"}
                            className="w-full flex  justify-start"
                          >
                            <RiLoopLeftFill className="size-4 " />
                            Retry
                          </Button>
                        )}
                        <Button
                          onClick={() => {
                            handleUpdateApiKey(index, "DELETE");
                          }}
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
            );
          })}
        </div>
      </div>
      {
        <GenerateApiKeyDialog
          open={openGenerateApiKeyDialog}
          onClose={handleGenerateApiKeyDialog}
        />
      }
      {openKeyDataDialog && keyData && (
        <ApiKeyDataDialog
          data={keyData}
          open={openKeyDataDialog}
          onClose={handleCloseKeyDataDialog}
        />
      )}
    </div>
  );
}

export default ApiKeysMain;
