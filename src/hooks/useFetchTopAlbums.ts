import { useState, useEffect } from 'react';
import ALBUMS_DATA from '../resources/data.json';

const simulateAjaxRequest = () => new Promise((resolve, reject) => {
  const data = ALBUMS_DATA.feed.entry.map((album: any, index: number) => {
    const name: string = album['im:name'].label;
    const artist: string = album['im:artist'].label;
    const price: string = album['im:price'].label;
    const rights: string = album.rights.label;
    const url: string = album.link.attributes.href;
    const image: string = album['im:image'][2].label;
    const id: string = album.id.attributes["im:id"];

    // i noticed the app was suffering from latency for loading the images at the same time,
    // this is a quick hack to load them ahead of time.
    // preloading an image will make UI appear more fluid
    const img: any = document.createElement('IMG');
    img.src = image;

    // create a front end friendly item that just returns what we need :)
    return {
      id,
      name,
      artist,
      price,
      rights,
      url,
      image,
      index,
    }
  });

  window.setTimeout(
    () => resolve(data),
    500
  );
});

export function useFetchTopAlbums() {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

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
