export type apiKeyDataType = {
  id: string;
  name: string;
  key: string;
  status: "DISABLED" | "ACTIVE" | "PENDING" | "ERROR";
  deleted: boolean;
  disabled: boolean;
  createdAt: string;
};
