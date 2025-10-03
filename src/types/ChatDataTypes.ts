import type { FileUIPart } from "ai";

export type chatRequestDataType = {
  role: "user" | "assistant";
  id: string;
  reasoningContent?: string;
  content: string | undefined;
  files?: FileUIPart[] | undefined;
};

export type searchResultDataType = {
  content: string;
  url: string;
  title: string;
};
export type chatMessageDataType = {
  role: "user" | "assistant";
  id: string;
  reasoningContent?: string;
  content: string | undefined;
  searchResults?: searchResultDataType[];
};

export type fileModelDataType = {
  name: string;
  mediaType: string;
  data: string;
  size: number;
  chatId?: string;
  messageId?: string;
  emailId?: string;
};

export type chatDataType  = {
  title: string;
  id: string;
  titleGenerated: boolean;
}