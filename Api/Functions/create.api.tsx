import axiosInstance from "../Axios/Axios";
import { endpoints } from "../EndPoints/endpoints";

interface CreatePayload {
  title: string;
  description: string;
}

interface CreateResponse {
  success: boolean;
  message: string;
  status: number;
}

export const Create = async (
  payload: CreatePayload
): Promise<CreateResponse | undefined> => {
  try {
    const response = await axiosInstance.post<CreateResponse>(
      endpoints.cms.create,
      payload
    );
    return response.data;
  } catch (error) {
    console.log("Contact Form error", error);
  }
};
