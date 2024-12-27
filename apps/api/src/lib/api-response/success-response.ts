import { ApiSuccessResponse } from '@packages/shared-types';
import { Response } from 'express';
import { getReasonPhrase } from 'http-status-codes';

/**
 * Sends a standardized success response.
 *
 * @param res - Express Response object
 * @param data - Data returned by the API
 * @param status - HTTP status code
 */
export const sendSuccessResponse = <T>(res: Response, data: T, status: number = 200): void => {
  const successResponse: ApiSuccessResponse<T> = {
    success: true,
    status,
    code: getReasonPhrase(status),
    timestamp: new Date().toISOString(),
    data,
  };

  res.status(status).json(successResponse);
};
