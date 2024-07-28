import axiosInstance from "../Axios/Axios";
import { endpoints } from "../EndPoints/endpoints";

interface LandingPageDetails {}

export const GetLandingPageList = async (): Promise<
  LandingPageDetails | undefined
> => {
  try {
    const response = await axiosInstance.post(endpoints.cms.list);
    return response?.data?.data as LandingPageDetails;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};
