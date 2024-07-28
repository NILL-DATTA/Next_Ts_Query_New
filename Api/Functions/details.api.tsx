import axiosInstance from "../Axios/Axios";
import { endpoints } from "../EndPoints/endpoints";

interface LandingPageDetails {}

export const GetLandingPageDetails = async (
  id: string
): Promise<LandingPageDetails> => {
  try {
    const response = await axiosInstance.get(`${endpoints.cms.details}/${id}`);
    if (!response) throw new Error("Network response was not ok");
  
    return response.data.data as LandingPageDetails;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch data");
  }
};
