import AppDialog from "@/apputils/AppDialog"


interface ApiKeyDataDialogInterface{
    data:string
    open:boolean
    onClose:()=>void
}


function ApiKeyDataDialog({data,open,onClose}:ApiKeyDataDialogInterface){
    return (
        <AppDialog isOpen={open} onClose={onClose} title ="API Key Data" >
            <div></div>
        </AppDialog>

    )
}

export default ApiKeyDataDialog