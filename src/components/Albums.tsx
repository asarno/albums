import React from 'react';
import styled from '@emotion/styled';
import Album from './Album';
import { AlbumProps } from '../types/Album';

interface Albums {
  favoritesSelected: boolean;
  albums: AlbumProps[];
  toggleFavorite: (e: React.SyntheticEvent, index: number) => any;
  favoritesMap: number[];
  currentAlbum: AlbumProps;
  setCurrentAlbum: (album: AlbumProps) => any;
}

const Container = styled.div`
  position: absolute;
  top: 4.5rem;
  text-align: center;
`;

const AlbumContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-right: 4rem;
  padding-left: 4rem;
  overflow-y: scroll;
  background-color: #eff0f2;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  margin: 2rem;
`;

function Albums({
  favoritesSelected,
  albums,
  favoritesMap,
  toggleFavorite,
  currentAlbum,
  setCurrentAlbum,
}: Albums) {

  return (
    <Container>

      <Title>{favoritesSelected ? "Favorites" : "All"}</Title>

      <AlbumContainer>

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


        <span></span>

      </AlbumContainer>

    </Container>
  );
}

export default Albums;
