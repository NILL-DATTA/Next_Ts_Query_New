import axiosInstance from "../Axios/Axios";
import { endpoints } from "../EndPoints/endpoints";

interface LoginPayload {
  email: string;
  password: string;
}

interface LoginResponse {
  success: boolean;
  message: string;
  status: number;
}

export const Log = async (
  payload: LoginPayload
): Promise<LoginResponse | undefined> => {
  try {
    const response = await axiosInstance.post<LoginResponse>(
      endpoints.auth.signin,
      payload
    );
    return response.data;
  } catch (error) {
    console.log("Contact Form error", error);
  }
};
