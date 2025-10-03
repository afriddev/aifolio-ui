/* eslint-disable @typescript-eslint/no-explicit-any */
import type { chatDataType } from "@/types/ChatDataTypes";
import { createContext, useContext, useReducer, type ReactNode } from "react";

export type dispatchDataType = {
  type: string;
  payload: any;
};
export type contextType = {
  dispatch: React.Dispatch<dispatchDataType>;
  refresh: boolean;
  navBarIndex: number;
  allChats: chatDataType[];
};

const initState: contextType = {
  dispatch: () => {},
  refresh: false,
  navBarIndex: 0,
  allChats: [],
};

const contextProvider = createContext(initState);

function reducer(state: contextType, action: dispatchDataType) {
  switch (action?.type) {
    case "setRefresh":
      return {
        ...state,
        refresh: action?.payload,
      };
    case "setNavBarIndex":
      return {
        ...state,
        navBarIndex: action?.payload,
      };

    case "setAllChats":
      return {
        ...state,
        allChats: action?.payload,
      };
    case "addNewChat":
      return {
        ...state,
        allChats: [action.payload, ...state.allChats],
      };

    default:
      throw new Error("Action unkonwn");
  }
}
export default function AppContext({ children }: { children: ReactNode }) {
  const [{ refresh, navBarIndex, allChats }, dispatch] = useReducer(
    reducer,
    initState
  );

  return (
    <contextProvider.Provider
      value={{
        dispatch,
        refresh,
        navBarIndex,
        allChats,
      }}
    >
      {children}
    </contextProvider.Provider>
  );
}

export function useAppContext() {
  const context = useContext(contextProvider);
  if (!context) throw new Error("Unable to use!");
  return context;
}
