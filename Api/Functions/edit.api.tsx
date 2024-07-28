import axiosInstance from "../Axios/Axios";
import { endpoints } from "../EndPoints/endpoints";

interface LoginPayload {
  title: string;
  description: string;
}

interface LoginResponse {
  success: boolean;
  message: string;
  status: number;
}

export const Edit = async (
  payload: LoginPayload
): Promise<LoginResponse | undefined> => {
  try {
    const response = await axiosInstance.post<LoginResponse>(
      endpoints.cms.edit,
      payload
    );
    return response.data;
  } catch (error) {
    console.log("Contact Form error", error);
  }
};
