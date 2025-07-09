import { signinRequest } from "@/apis/auth";
import { useMutation } from "@tanstack/react-query";

export const usesignIn = () => {
  const {
    isError,
    isPending,
    isSuccess,
    error,
    mutateAsync: signinMutation,
  } = useMutation({
    mutationFn: signinRequest,
    onSuccess: () => {
      console.log("data", data);
    },
    onError: (error) => {
      console.log("error", error);
    },
  });
  return {
    isError,
    isPending,
    isSuccess,
    error,
    signinMutation,
  };
};
