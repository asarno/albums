import React from 'react';
import Album from './Album';
import { AlbumProps } from '../types/Album';

import {
  Title,
  AlbumsContainerPrimary,
  AlbumsContainerSecondary
} from './styled';
interface Albums {
  favoritesSelected: boolean;
  albums: AlbumProps[];
  toggleFavorite: (e: React.SyntheticEvent, index: number) => any;
  favoritesMap: number[];
  currentAlbum: AlbumProps;
  setCurrentAlbum: (album: AlbumProps) => any;
}

function Albums({
  favoritesSelected,
  albums,
  favoritesMap,
  toggleFavorite,
  currentAlbum,
  setCurrentAlbum,
}: Albums) {

  return (
    <AlbumsContainerPrimary>

      <Title>{favoritesSelected ? "Favorites" : "All"}</Title>

      <AlbumsContainerSecondary>
        {albums.map((album: AlbumProps, i: number) => {
          const { id } = album;
          const isSelected = currentAlbum !== null && currentAlbum.id === id;
          const isFavorited = favoritesSelected || favoritesMap.indexOf(i) !== -1;

          return (
            <Album
              isSelected={isSelected}
              isFavorited={isFavorited}
              album={album}
              handleCardClick={() => setCurrentAlbum(album)}
              handleStarClick={(e: React.SyntheticEvent) => toggleFavorite(e, i)}
              favoritesSelected={favoritesSelected}
              key={i}
            />
          )
        }
        )}

        {favoritesSelected && albums.length === 0 &&
          <span>looks like you hate music, go back to albums and try favoriting some</span>
        }

      </AlbumsContainerSecondary>

    </AlbumsContainerPrimary>
  );
}

export default Albums;
