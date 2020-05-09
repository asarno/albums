import React, { useState, useEffect } from 'react';
import './index.css';
import Albums from './components/Albums';
import Header from './components/Header';
import { useFetchTopAlbums } from './hooks/useFetchTopAlbums';
import styled from '@emotion/styled';
import RingLoader from "react-spinners/RingLoader";
import { useLocalStorage } from './hooks/useLocalStorage';
import Overlay from './components/Overlay';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #eff0f2;
`;

function App() {
  // determines whether or not favorites tab is selected
  const [favoritesSelected, setFavoritesSelected] = useState(false);
  
  // array of favorite indicies of which is preserved in browser via useLocalStorage hook
  const [favoritesMap, setFavoritesMap] = useLocalStorage("favoritesMap", []);
  
  // actual list of favorited albums
  const [favorites, setFavorites] = useState([]);

  // currently selected album in overlay (if any)
  const [currentAlbum, setCurrentAlbum] = useState(null);

  // fetch album data with hook
  const albumData = useFetchTopAlbums();
  const { response, error, loading } = albumData;
  const albums = response;

  // determine album state based on response, error, loading variables
  const renderFavorites = !loading && !error && response && favoritesSelected;

  // if favoritesMap ever changes, update favoritedAlbums accordingly
  useEffect(() => {
    if (albums) {
      const newFavorites = favoritesMap.map((i: number) => albums[i]);
      setFavorites(newFavorites);
    }
  }, [favoritesMap, setFavorites, albums]);

  // if user changes tabs, close overlay
  useEffect(() => {
    setCurrentAlbum(null);
  }, [favoritesSelected])

  function toggleFavorite(e: React.SyntheticEvent, index: number) {
    e.stopPropagation();

    const indexIfAlreadyFavorited = favoritesMap.indexOf(index);

    if (indexIfAlreadyFavorited !== -1) {
      const newFavorites = [...favoritesMap];
      newFavorites.splice(indexIfAlreadyFavorited, 1);
      setFavoritesMap(newFavorites);
      setCurrentAlbum(null);
    }

    else {
      const newFavorites = [...favoritesMap];
      newFavorites.push(index);
      setFavoritesMap(newFavorites);
    }
    
  };


  return (
    <Container>

      <Header
        favoritesSelected={favoritesSelected}
        setFavoritesSelected={setFavoritesSelected}
      />

      <Overlay
        album={currentAlbum}
        onClose={() => setCurrentAlbum(null)}
        isOpen={currentAlbum !== null}
        toggleFavorite={toggleFavorite}
        isFavorited={currentAlbum && favoritesMap.indexOf(currentAlbum.index) !== -1}
      />

      {/* body */}
      {loading &&
        <RingLoader size={70} />
      }

      {error &&
        <div>dangit: {error}</div>
      }

      {albums &&
        <Albums
          favoritesSelected={favoritesSelected}
          albums={renderFavorites ? favorites : albums}
          toggleFavorite={toggleFavorite}
          favoritesMap={favoritesMap}
          currentAlbum={currentAlbum}
          setCurrentAlbum={setCurrentAlbum}
        />
      }

    </Container>
  );
}

export default App;
