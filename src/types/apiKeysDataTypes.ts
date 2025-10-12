export type apiKeyDataType = {
  id: string;
  name: string;
  key: string;
  status: "DISABLED" | "ACTIVE" | "PENDING" | "ERROR";
  deleted: boolean;
  disabled: boolean;
  createdAt: string;
};

export type updateApiKeyRequestDataType = {
  id: string;
  method: "DELETE" | "DISABLE" | "ENABLE";
};


export type generateApiKeyRequestDataType = {
  name: string;
  singleFileId: string;
  keyId?:string
};
