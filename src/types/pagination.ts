export interface PaginationParams {
  offset?: number;
  limit?: number;
}

export interface PaginationResponse<T> {
  data: T[];
  total: number;
  offset: number;
  limit: number;
}
