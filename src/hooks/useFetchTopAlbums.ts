import { useState, useEffect } from 'react';
import ALBUMS_DATA from '../resources/data.json';

const simulateAjaxRequest = () => new Promise((resolve, reject) => {
  window.setTimeout(
    () => resolve(ALBUMS_DATA),
    2000
  );
});

export function useFetchTopAlbums() {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const doFetch = async () => {
      setLoading(true);
      try {
        const albums: any = await simulateAjaxRequest();
        setResponse(albums);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };
    doFetch();
  }, []);

  return { response, error, loading };
};
