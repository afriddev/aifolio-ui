import AppDialog from "@/apputils/AppDialog";
import { Response } from "@/components/ui/response";

interface ApiKeyDataDialogInterface {
  data: string;
  open: boolean;
  onClose: () => void;
}

function ApiKeyDataDialog({ data, open, onClose }: ApiKeyDataDialogInterface) {
  return (
    <AppDialog isOpen={open} onClose={onClose} title="API Key Data">
      <div className="max-w-[50vw] p-3"> 
        <Response>{data}</Response>
      </div>
    </AppDialog>
  );
}

export default ApiKeyDataDialog;
