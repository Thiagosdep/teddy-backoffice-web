import apiClient from "./client";
import { PaginationParams, PaginationResponse } from "../types/pagination";
import { User, CreateUserRequest, UpdateUserRequest } from "../types/user";

export const userService = {
  getUsers: async (
    params: PaginationParams & { userIds?: string; search?: string }
  ): Promise<PaginationResponse<User>> => {
    const response = await apiClient.get("/users", { params });
    return response.data;
  },

  getUser: async (id: string): Promise<User> => {
    const response = await apiClient.get(`/users/${id}`);
    return response.data;
  },

  createUser: async (userData: CreateUserRequest): Promise<void> => {
    await apiClient.post("/users", userData);
  },

  updateUser: async (
    id: string,
    userData: UpdateUserRequest
  ): Promise<void> => {
    await apiClient.patch(`/users/${id}`, userData);
  },

  deleteUser: async (id: string): Promise<void> => {
    await apiClient.delete(`/users/${id}`);
  },

  selectUsers: async (userId: string): Promise<void> => {
    await apiClient.post("/admins/users/select", { userId });
  },

  removeSelectedUsers: async (userId: string): Promise<void> => {
    await apiClient.post("/admins/users/remove", { userId });
  },

  getSelectedUsers: async (): Promise<string[]> => {
    const response = await apiClient.get("/admins/users/select");
    return response.data.userIds;
  },
};
