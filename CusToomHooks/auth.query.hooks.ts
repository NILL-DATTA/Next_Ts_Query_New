import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { REG, USERS } from "../CusToomHooks/Query_keys/authQuery.keys";
import { Log } from "@/Api/Functions/login.api";
import { useGlobalHooks } from "../CusToomHooks/GlobalHooks";
import { Reg } from "@/Api/Functions/registration.api";
import { Cookies } from "react-cookie";

interface SignInResponse {}

interface SignInVariables {}

interface SignupResponse {}
interface SignInResponse {
  token: string;
  mutationFn: Function;
}

interface SignupVariables {}

export const useUserSignInMutation = (): UseMutationResult<
  SignInResponse,
  unknown,
  SignInVariables,
  unknown
> => {
  const { queryClient } = useGlobalHooks();
  const cookie = new Cookies();

  return useMutation<SignInResponse, unknown, SignInVariables>({
    mutationFn: Log,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: [USERS] });
      cookie.set("token", data.token);
    },
  });
};

export const useUserSignUpMutation = (): UseMutationResult<
  SignupResponse,
  unknown,
  SignupVariables,
  unknown
> => {
  const { queryClient } = useGlobalHooks();

  return useMutation<SignupResponse, unknown, SignupVariables>({
    mutationFn: Reg,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [REG] });
    },
  });
};
