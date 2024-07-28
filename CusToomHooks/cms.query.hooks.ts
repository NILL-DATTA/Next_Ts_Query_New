import {
  DefinedInitialDataOptions,
  QueryKey,
  useMutation,
  UseMutationResult,
  useQuery,
  UseQueryResult,
} from "@tanstack/react-query";
import { PRODUCTS } from "../CusToomHooks/Query_keys/authQuery.keys";
import { useGlobalHooks } from "../CusToomHooks/GlobalHooks";
import { GetLandingPageList } from "@/Api/Functions/list.api";
import { GetLandingPageDetails } from "@/Api/Functions/details.api";
import { Delete } from "@/Api/Functions/remove.api";
import { useNavigate } from "react-router-dom";
import { Create } from "@/Api/Functions/create.api";
import { Edit } from "@/Api/Functions/edit.api";

interface LandingPageList {}
interface LandingPageDetails {}
interface CreateResponse {}
interface UpDateResponse {}
export const listQuery = (): DefinedInitialDataOptions<
  LandingPageList,
  unknown,
  LandingPageList,
  QueryKey
> => {
  const { queryClient } = useGlobalHooks();

  return useQuery<LandingPageList, unknown>({
    queryFn: GetLandingPageList,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [PRODUCTS] });
    },
  });
};

export const DetailsQuery = (
  id: string
): UseQueryResult<LandingPageDetails> => {
  const { queryClient } = useGlobalHooks();

  return useQuery<LandingPageDetails>({
    queryKey: ["DETAILS", id],
    queryFn: () => GetLandingPageDetails(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["DETAILS"] });
    },
    enabled: !!id,
    staleTime: 300000,
    cacheTime: 600000,
  });
};
export const useProductDeleteMutation = () => {
  const { queryClient } = useGlobalHooks();

  return useMutation<void, unknown, { id: number }>({
    mutationFn: ({ id }) => Delete(id),
    onSuccess: () => {
      // toast(message, { type: "success" });
      queryClient.invalidateQueries([PRODUCTS]);
    },
  });
};

export const useUserCreateMutation = (): UseMutationResult<
  CreateResponse,
  unknown
> => {
  const { queryClient } = useGlobalHooks();

  return useMutation<CreateResponse, unknown, CreateResponse>({
    mutationFn: Create,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["CREATE"] });
    },
  });
};

export const useCreateMutation = (): UseMutationResult<
  UpDateResponse,
  unknown
> => {
  const { queryClient } = useGlobalHooks();

  return useMutation<UpDateResponse, unknown>({
    mutationFn: Edit,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["CREATE"] });
    },
  });
};
