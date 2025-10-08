import AppDialog from "@/apputils/AppDialog";
import SelectFile from "@/apputils/SelectFile";

interface GenerateApiKeyInterface {
  open: boolean;
  onClose: () => void;
}

function GenerateApiKeyDialog({ onClose, open }: GenerateApiKeyInterface) {
  return (
    <AppDialog
      title="Generate API Key"
      isOpen={open}
      start="CENTER"
      onClose={onClose}
    >
      <div><SelectFile/></div>
    </AppDialog>
  );
}
export default GenerateApiKeyDialog;
