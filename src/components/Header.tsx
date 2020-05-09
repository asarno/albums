import React from 'react';

import {
  Nav,
  RightContainer,
  LeftContainer,
  NavItem,
  NavLogo,
} from './styled';

interface Props {
  setFavoritesSelected: any;
  favoritesSelected: boolean;
}

function Header({
  setFavoritesSelected,
  favoritesSelected,
}: Props) {

  return (
    <Nav id="header">
      <LeftContainer>
        <NavLogo
          alt="logo"
          onClick={() => setFavoritesSelected(false)}
          src={require('../resources/logo.png')}
        />
      </LeftContainer>
      <RightContainer>
        <NavItem
          isSelected={!favoritesSelected}
          onClick={() => setFavoritesSelected(false)}
        >
          Albums
        </NavItem>
        <NavItem
          isSelected={favoritesSelected}
          onClick={() => setFavoritesSelected(true)}
        >
          Favorites
        </NavItem>
      </RightContainer>
    </Nav>
  );
}

export default Header;
