// hooks/useFetch.ts
import { fetchData } from '@/services/api';
import { useState, useEffect } from 'react';


type FetchState<T> = {
  data: T | null;
  loading: boolean;
  error: Error | null;
};

export const useFetch = <T>(url: string) => {
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchData<T>(url);
        setState({ data: result, loading: false, error: null });
      } catch (error:any) {
        setState({ data: null, loading: false, error:error.message || "" });
      }
    };

    getData();
  }, [url]);

  return state;
};
