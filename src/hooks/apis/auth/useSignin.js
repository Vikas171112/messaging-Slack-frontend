import { useMutation } from "@tanstack/react-query";

export const usesignIn = () => {
  const {
    isError,
    isPending,
    isSuccess,
    error,
    mutate: signinMutation,
  } = useMutation({
    onSuccess: () => {
      console.log("data", data);
    },
    onError: () => {
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
