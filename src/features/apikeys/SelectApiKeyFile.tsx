import { X } from "lucide-react";
import { useRef, useState } from "react";
import { IoCloudUpload, IoLinkSharp } from "react-icons/io5";
import { LuAsterisk } from "react-icons/lu";
import { ExtractFileData } from "../../apputils/AppUtils";
import type { FileUIPart } from "ai";
import { useUploadApiKeyFile } from "@/hooks/ApiKeyHooks";
import { Input } from "@/components/ui/input";
import { MotionH2, MotionH3, MotionParagraph } from "@/apputils/MotionUtils";

interface SelectApiKeyFileInterface {
  onFileSelect: (
    fileId: string | undefined,
    methodType: "CONTEXT" | "RAG" | undefined
  ) => void;
}

function SelectApiKeyFile({ onFileSelect }: SelectApiKeyFileInterface) {
  const [selectedFile, setSelectedFile] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const { uplaodApiKeyFile } = useUploadApiKeyFile();

  async function handleFileSelect(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile((prev) => (prev ? [...prev, file] : [file]));
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
              onFileSelect?.(data.fileId, data.methodType);
            } else {
              setSelectedFile((prev) => {
                const newFiles = [...prev];
                newFiles.splice(selectedFile.length - 1, 1);
                return newFiles;
              });
            }
          },
        }
      );
    }
  }

  function handleClick() {
    fileInputRef.current?.click();
  }
  function handleDeleteFile(index: number) {
    setSelectedFile((prev) => {
      const newFiles = [...prev];
      newFiles.splice(index, 1);
      return newFiles;
    });
    if (fileInputRef.current) fileInputRef.current.value = "";
    onFileSelect(undefined, undefined);
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
      <div className="flex flex-col gap-4  ">
        <div className=" border-dashed rounded-2xl border-primary/50 items-center flex flex-col gap-10 h-[30vh] border w-[60vw]">
          <div className="flex items-center gap-4 justify-between mt-10 flex-col  w-full">
            <div
              className={`flex  items-center gap-2 ${
                selectedFile?.length < 5
                  ? "cursor-pointer"
                  : "cursor-not-allowed "
              }`}
              onClick={handleClick}
            >
              <IoCloudUpload
                className={`!w-8  !h-8  ${
                  selectedFile?.length >= 5 ? "text-primary/40" : "text-primary"
                } `}
              />
              <div className="flex items-center relative  ">
                <MotionParagraph
                  className={`${
                    selectedFile?.length >= 5
                      ? "text-primary/40"
                      : "text-secondary"
                  }`}
                >
                  Upload Sources
                </MotionParagraph>
                <LuAsterisk
                  className={`  ${
                    selectedFile?.length >= 5
                      ? "text-primary/40"
                      : "text-destructive"
                  } `}
                />
              </div>
            </div>

            <MotionParagraph className="flex text-primary/70 ">
              Supported file types: PDF, .txt, Markdown, Csv.
            </MotionParagraph>
          </div>

          {selectedFile && (
            <div className="flex flex-col gap-2">
              {selectedFile.map((file, index) => (
                <div className="flex items-center px-1 gap-4 justify-between">
                  <MotionParagraph className="text-secondary ">{file.name}</MotionParagraph>
                  <X
                    onClick={() => {
                      handleDeleteFile(index);
                    }}
                    className="text-destructive size-5 cursor-pointer"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="flex gap-4 flex-col items-start border p-3   rounded-2xl">
          <div className="flex justify-center gap-4 ">
            <IoLinkSharp className="!h-5 !w-5" />
            <MotionH2>YouTube Link</MotionH2>
          </div>
          <div className="w-full ">
            <Input
              className="h-10"
              placeholder="Paste YouTube URL"
              icon="youtube"
            />
          </div>
        </div>

        <div className="text-[10px] flex flex-col ">
          <MotionH3 className="text-destructive">Notes</MotionH3>
          <ul className="flex flex-col pl-5">
            <li className="list-disc">Maximum 5 Files are supported</li>

            <li className="list-disc">
              Only the text transcript will be imported at this moment
            </li>

            <li className="list-disc">
              Only public YouTube videos are supported
            </li>
            <li className="list-disc">
              Recently uploaded videos may not be available to import
            </li>
            <li className="list-disc">
              Only English and Hindi audio is supported
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default SelectApiKeyFile;
