import { useState } from 'react';

interface UseAIToolOptions {
  slug: string;
  onSuccess?: (data: any) => void;
  onError?: (error: string) => void;
}

export function useAITool({ slug, onSuccess, onError }: UseAIToolOptions) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<any>(null);

  const generate = async (input: any) => {
    setLoading(true);
    setError(null);
    setData(null);

    try {
      const response = await fetch(`/api/ai-tools/${slug}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(input),
      });

      const result = await response.json();

      if (!result.success) {
        const errorMessage = result.error || 'An error occurred';
        setError(errorMessage);
        onError?.(errorMessage);
        return null;
      }

      setData(result.data);
      onSuccess?.(result.data);
      return result.data;
    } catch (err: any) {
      const errorMessage = err.message || 'Network error occurred';
      setError(errorMessage);
      onError?.(errorMessage);
      return null;
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setData(null);
    setError(null);
  };

  return {
    generate,
    loading,
    error,
    data,
    reset,
  };
}
