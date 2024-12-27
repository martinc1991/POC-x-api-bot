import { TestEndpointGETResponse } from '@packages/shared-types';
import { useAPI } from '../hooks/use-api';

export function Home() {
  const { data, error, isLoading } = useAPI<TestEndpointGETResponse>('/test');

  if (error) return <div>Error</div>;
  if (isLoading || !data) return <div>Loading...</div>;

  return (
    <div className="w-full h-full flex-1 flex items-center justify-center flex-col">
      <h1>Monorepo template</h1>

      <p>
        API is running at: <a href={data.data.baseUrl}>{data.data.baseUrl}</a>
      </p>
    </div>
  );
}
