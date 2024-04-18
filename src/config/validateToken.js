import axios from "axios";
import { baseUrl } from "./config";

export const validateToken = async (token) => {
  try {
    const response = await axios.post(
      `${baseUrl}/users/verify`,
      { token: token },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (response.data?.success === true) {
      console.log("Verified User", response.data);
      return response.data;
    } else {
      throw new Error("Token validation failed");
    }
  } catch (error) {
    console.error("Token validation error:", error);
    throw new Error("Token validation failed");
  }
};
