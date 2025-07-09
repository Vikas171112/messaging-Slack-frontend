import { signupRequest } from "@/apis/auth";
import { useMutation } from "@tanstack/react-query";

export const useSignup = () => {
  const {
    isPending,
    error,
    isSuccess,
    mutateAsync: signupMutation,
  } = useMutation({
    mutationFn: signupRequest,
    onSuccess: (data) => {
      console.log("data", data);
    },
    onError: (error) => {
      console.log("error", error);
    },
  });
  return {
    isPending,
    isSuccess,
    error,
    signupMutation,
  };
};
