import { apiResponse } from '@/lib/api-response/index.js';
import { errorCatchMiddleware } from '@/middlewares/errors.js';
import { TestEndpointGETResponse } from '@packages/shared-types';
import { Request, Response, Router } from 'express';

export const testRouter = Router();

testRouter.get(
  '/',
  errorCatchMiddleware(async (req: Request, res: Response) => {
    const baseUrl = req.protocol + '://' + req.get('host');
    const url = `${req.protocol}://${req.get('host')}${req.originalUrl}`;

    const response: TestEndpointGETResponse = {
      message: 'API is working',
      baseUrl,
      url,
    };

    apiResponse.success(res, response);
  }),
);
