import CreateChannelContext from "@/context/Channel/CreateChannelContext";
import { useContext } from "react";

export const useCreateChannelContext = () => {
  return useContext(CreateChannelContext);
};
