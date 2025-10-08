import { Button } from "@/components/ui/button";
import { useRef, useState } from "react";

interface SelectFileInterface {}

function SelectFile() {
  const [fileName, setFileName] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) setFileName(file.name);
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };
  return (
    <div className="flex flex-col gap-2">
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileSelect}
        className="hidden"
      />
      <Button onClick={handleClick} >
        Select File
      </Button>
      {fileName && (
        <p className="text-sm text-muted-foreground">Selected: {fileName}</p>
      )}
    </div>
  );
}
export default SelectFile;
