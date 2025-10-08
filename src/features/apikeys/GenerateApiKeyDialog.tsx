import AppDialog from "@/apputils/AppDialog";
import SelectFile from "@/features/apikeys/SelectApiKeyFile";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useGenerateApiKey } from "@/hooks/ApiKeyHooks";

interface GenerateApiKeyInterface {
  open: boolean;
  onClose: () => void;
}

function GenerateApiKeyDialog({ onClose, open }: GenerateApiKeyInterface) {
  const [fileId, setFileId] = useState<string | undefined>(undefined);
  const [name, setName] = useState<string>("");
  const { generateApiKey } = useGenerateApiKey();
 

  function handleGenerateApiKey() {
    generateApiKey(
      {
        name,
        fileId: fileId!,
      },
      {
        onSuccess(data) {
          if (data?.data === "SUCCESS") {
            onClose();
          }
        },
      }
    );
  }

  return (
    <AppDialog
      title="Generate API Key"
      isOpen={open}
      start="CENTER"
      onClose={onClose}
    >
      <div className="p-4 flex flex-col   gap-4">
        <Input
          mandatory
          label="API Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder=" Medical Faq's"
        />

        <SelectFile
          onFileSelect={(fileId) => {
            setFileId(fileId);
          }}
        />
        <div className="flex justify-center mt-5">
          <Button
            onClick={handleGenerateApiKey}
            disabled={!name || !fileId}
            className="w-fit"
          >
            Generate API Key
          </Button>
        </div>
      </div>
    </AppDialog>
  );
}
export default GenerateApiKeyDialog;
