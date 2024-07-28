import axiosInstance from "../Axios/Axios";
import { endpoints } from "../EndPoints/endpoints";

interface LoginPayload {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}

interface RegistrationResponse {
  success: boolean;
  message: string;
  status: number;
}

export const Reg = async (
  payload: LoginPayload
): Promise<RegistrationResponse | undefined> => {
  try {
    const response = await axiosInstance.post<RegistrationResponse>(
      endpoints.auth.signup,
      payload
    );
    return response.data;
  } catch (error) {
    console.log("Contact Form error", error);
  }
};
