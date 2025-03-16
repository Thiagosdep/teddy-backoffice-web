export interface NotificationPayload {
  userId: string;
  type: "email";
  priority: "high" | "medium" | "low";
  title: string;
  message: string;
}

export interface NotificationStats {
  pendingJobs: number;
  activeJobs: number;
  completedJobs: number;
  failedJobs: number;
}
