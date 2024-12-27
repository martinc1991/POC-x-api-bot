export interface ApiErrorResponse {
  success: false;
  status: number;
  error: {
    code: string;
    message: string;
  };
}

export interface ApiSuccessResponse<T> {
  success: true;
  status: number;
  code: string;
  timestamp: string;
  data: T;
}
