import React from 'react';
import styled from '@emotion/styled';
import { AlbumProps } from '../types/Album';

interface Props {
    album: AlbumProps
    isFavorited: boolean;
    isOpen: boolean;
    onClose: () => any
    toggleFavorite: (e: React.SyntheticEvent, index: number) => any,
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5rem;
    min-height: 25vh;
    width 85vw;
`;

const List = styled.ul`
    list-style: none;
    max-width: 50%;
`;

const Item = styled.li`
    margin: 1rem;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    color: #fff;
    background-color: #82B950;
    border-radius: 4px;
    cursor: pointer;
    margin: 0.5rem;
    font-size: 1rem;
    outline: none;

    &:hover {
        transform: scale(1.015);
      }
`;

const Star: any = styled.span`
    color: ${({ isFavorited }: any) => isFavorited ? "#e2e240" : "#d3d3d3"};
    font-size: 2rem;
    pointer-events: inherit;
    cursor: pointer;
    margin: 0.5rem;

    &:hover {
        transform: scale(1.015);
      }
`;

const Image = styled.img`
    width: 170px;
    height: 170px;
`;

function Overlay({
    album,
    isFavorited,
    isOpen,
    onClose,
    toggleFavorite,
}: Props) {

    if (!isOpen) {
        return <div />
    }

    const {
        name,
        artist,
        price,
        rights,
        url,
        image,
        index,
    } = album;

    return (
        <div
            style={{
                zIndex: 6,
                position: "fixed",
                left: 0,
                right: 0,
                top: 0,
                overflow: "hidden",
                height: isOpen ? 350 : 0,
                boxShadow: "inset 0 1px 3px 0 rgba(0, 0, 0, 0.34)",
                backgroundColor: "#fff",
                transition: '0.3s ease-in-out',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
            }}
        >

            <Container>

                <Image src={image} alt="albumCover" />

                <List>
                    <Item>{name}</Item>
                    <Item style={{ fontWeight: 600 }}>{artist}</Item>
                    <Item>{price}</Item>
                    <Item style={{ fontSize: '0.5rem', fontStyle: 'italic' }}>{rights}</Item>
                </List>

            </Container>

            <ButtonContainer>
                <Star isFavorited={isFavorited} onClick={(e: React.SyntheticEvent) => toggleFavorite(e, index)}>{String.fromCharCode(9733)}</Star>
                <Button style={{ width: '12vw' }} onClick={() => window.open(url, "_blank")}>See in iTunes</Button>
                <Button style={{ backgroundColor: '#d34444', width: '8vw' }} onClick={onClose}>Close</Button>
            </ButtonContainer>

        </div>
    );
}

export default Overlay;




