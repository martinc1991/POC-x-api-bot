import { ApiSuccessResponse } from '@packages/shared-types';
import useSWR, { SWRConfiguration } from 'swr';
import { fetcher } from '../lib/fetcher';

export function useAPI<T>(endpoint: string, options?: SWRConfiguration) {
  return useSWR<ApiSuccessResponse<T>>(endpoint, fetcher, options);
}
