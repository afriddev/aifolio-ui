import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useRef, useState } from "react";
import { IoCloudUpload } from "react-icons/io5";
import { LuAsterisk } from "react-icons/lu";
import { ExtractFileData } from "../../apputils/AppUtils";
import type { FileUIPart } from "ai";
import { useUploadApiKeyFile } from "@/hooks/ApiKeyHooks";

interface SelectApiKeyFileInterface {
  onFileSelect: (fileId: string | undefined) => void;
}

function SelectApiKeyFile({ onFileSelect }: SelectApiKeyFileInterface) {
  const [selectedFile, setSelectedFile] = useState<File | undefined>(undefined);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const { uplaodApiKeyFile } = useUploadApiKeyFile();

  async function handleFileSelect(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      const tempFileUiPart: FileUIPart = {
        type: "file",
        url: URL.createObjectURL(file),
        mediaType: file.type,
        filename: file.name,
      };
      const extractedFile = await ExtractFileData(tempFileUiPart);
      uplaodApiKeyFile(
        {
          ...extractedFile,
          emailId: "afridayn01@gmail.com",
        },
        {
          onSuccess(data) {
            if (data?.data === "SUCCESS") {
              onFileSelect?.(data.fileId);
            }
          },
        }
      );
    }
  }

  function handleClick() {
    fileInputRef.current?.click();
  }
  function handleDeleteFile() {
    setSelectedFile(undefined);
    if (fileInputRef.current) fileInputRef.current.value = "";
    onFileSelect(undefined);
  }
  return (
    <div className="flex flex-col gap-2">
      <input
        type="file"
        accept="application/pdf"
        ref={fileInputRef}
        onChange={handleFileSelect}
        className="hidden"
      />
      <Button disabled={selectedFile ? true : false} onClick={handleClick}>
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center relative ">
            Select File
            <LuAsterisk className="w-3  h-3  absolute -right-4 text-destructive" />
          </div>

          <IoCloudUpload />
        </div>
      </Button>
      {selectedFile && (
        <div className="flex items-center px-1 justify-between">
          <p className="text-constructive font-semibold">{selectedFile.name}</p>
          <X
            onClick={() => {
              handleDeleteFile();
            }}
            className="text-destructive size-4 cursor-pointer"
          />
        </div>
      )}
    </div>
  );
}
export default SelectApiKeyFile;
