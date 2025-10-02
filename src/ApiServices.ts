/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { useToast } from "./components/ui/use-toast";


export const BASE_URL = "http://127.0.0.1:8001/";

export async function getAPI(url: string) {
  const { data } = await axios.get(BASE_URL + url);
  return data;
}

export async function postAPI(url: string, payload: any) {
  const { data } = await axios.post(BASE_URL + url, payload, {
    headers: {
      Accept: "application/json",
    },
  });
  return data;
}

export function useHandleApiResponse() {
  const responseData = [
    { data: "SUCCESS", message: "Success", variant: "constructive" },
    { data: "ERROR", message: "Something went wrong", variant: "destructive" },
  ];

  const { toast } = useToast();

  function handleToast(data: string) {
    for (let index = 0; index < responseData.length; index++) {
      if (responseData[index].data === data) {
        toast({
          title: responseData[index].message,
          variant: responseData[index].variant as
            | "constructive"
            | "destructive"
            | "default",
        });

        break;
      }
    }
  }
  return { handleToast };
}
