import { useState, useEffect } from 'react';
import { apiClient } from '../services/api';

export interface Session {
  id: string;
  name: string;
}

export const useSessions = () => {
  const [data, setData] = useState<Session[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const fetchSessions = async () => {
      try {
        setLoading(true);
        const responseData = await apiClient('/portfolio/activities'); 
        
        if (isMounted) {
          setData(responseData || []); 
          setError(null);
        }
      } catch (err: any) {
        if (isMounted) {
          setError(err.message || 'Failed to fetch sessions');
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchSessions();

    return () => {
      isMounted = false;
    };
  }, []);

  return { data, loading, error };
};
