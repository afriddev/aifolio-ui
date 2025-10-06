export type apiKeyDataType = {
  id: string;
  name: string;
  key: string;
  status: "DISABLED" | "ACTIVE" | "PENDING";
  deleted: boolean;
  disabled: boolean;
  createdAt: string;
};
