import { jwtDecode } from "jwt-decode";
import apiClient from "./client";
import { JwtPayload, LoginCredentials, LoginResponse } from "../types/auth";

export const authService = {
  login: async (credentials: LoginCredentials): Promise<string> => {
    const response = await apiClient.post<LoginResponse>(
      "/admins/auth",
      credentials
    );
    const { token } = response.data;

    localStorage.setItem("auth_token", token);

    return token;
  },

  logout: (): void => {
    localStorage.removeItem("auth_token");
  },

  getCurrentUser: (): JwtPayload | null => {
    try {
      const token = localStorage.getItem("auth_token");
      if (token) {
        return jwtDecode<JwtPayload>(token);
      }
      return null;
    } catch (error) {
      console.error("Failed to decode token", error);
      return null;
    }
  },

  isTokenValid: (): boolean => {
    const user = authService.getCurrentUser();
    if (!user) return false;

    const currentTime = Date.now() / 1000;
    return user.exp > currentTime;
  },
};
