import type { fileModelDataType } from "@/types/chatDataTypes";
import type { FileUIPart } from "ai";
import { v4 as uuidv4 } from "uuid";

export function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const result = reader.result as string;
      const base64 = result.split(",")[1];
      resolve(base64);
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

export async function ExtractFileData(
  part: FileUIPart
): Promise<fileModelDataType> {
  const res = await fetch(part.url);
  const blob = await res.blob();

  const file = new File([blob], part.filename ?? `${uuidv4().toString()}.pdf`, {
    type: part.mediaType || blob.type || "application/octet-stream",
  });

  const base64Data = await fileToBase64(file);

  return {
    name: file.name,
    mediaType: file.type,
    data: base64Data,
    size: file.size,
  };
}

export function truncateText(
  text: string,
  maxLength: number,
  ending: string = "…"
): string {
  if (!text) return "";
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + ending;
}

export function maskApiKey(key: string, prefixLength: number = 10): string {
  const prefix = key.slice(0, prefixLength);
  const suffix = key.slice(-prefixLength);
  return `${prefix}......${suffix}`;
}

export function getFormattedDate(dateInput?: Date | string): string {
  const date = dateInput ? new Date(dateInput) : new Date();
  const options: Intl.DateTimeFormatOptions = {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  };
  const formatted = date.toLocaleString("en-US", options);
  return formatted;
}
