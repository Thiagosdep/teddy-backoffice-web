import apiClient from "./client";
import { NotificationPayload, NotificationStats } from "../types/notification";

export const notificationService = {
  sendNotification: async (
    payload: NotificationPayload
  ): Promise<{ success: boolean }> => {
    const response = await apiClient.post("/users/notifications", payload);
    return response.data;
  },

  getNotificationStats: async (): Promise<NotificationStats> => {
    const response = await apiClient.get("/users/notifications/stats");
    return response.data;
  },
};
