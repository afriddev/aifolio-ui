import { useEffect, useState } from "react";
import ChatMain from "../chat/ChatMain";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useGetAllApiKeysAPI } from "@/hooks/ApiKeyHooks";
import type { apiKeyDataType } from "@/types/apiKeysDataTypes";
import { maskApiKey } from "@/apputils/AppUtils";
import { LuAsterisk } from "react-icons/lu";

function ChatDemoMain() {
  const [openApiKeySelect, setOpenApiKeySelect] = useState(false);
  const [apiKeys, setApiKeys] = useState<apiKeyDataType[] | undefined>(
    undefined
  );
  const { getApiKeys } = useGetAllApiKeysAPI();
  const [selectedKeyId, setSelectedKeyId] = useState<string | undefined>(
    undefined
  );

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
  }, []);
  return (
    <div className="flex w-full ">
      <div className="flex w-[100%] border-r">
        <ChatMain
          inputToolBar={false}
          tempChat={true}
          extraBody={{  
            apiKey: selectedKeyId,
          }}
          api="/api/v1/chat/demo"
        />
      </div>

      <div className="px-5 p-5 flex w-[30%]">
        <div className="w-full">
          <label className="text-foreground/70 flex items-center font-semibold pl-1">
            Select API Key
            <LuAsterisk className="text-destructive" />{" "}
          </label>
          <Select
            onValueChange={(value) => {
              setSelectedKeyId(value);
            }}
            open={openApiKeySelect}
            onOpenChange={(isOpen) => setOpenApiKeySelect(isOpen)}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select API key" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {apiKeys !== undefined && apiKeys.length > 0 ? (
                  <>
                    <SelectLabel>Available API Keys</SelectLabel>
                    {apiKeys.map((key) => (
                      <SelectItem key={key.id} value={key.key}>
                        {key.name} - {maskApiKey(key.key, 7)}
                      </SelectItem>
                    ))}
                  </>
                ) : (
                  <SelectLabel>No API Keys Available</SelectLabel>
                )}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}

export default ChatDemoMain;
