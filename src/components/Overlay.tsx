import React from 'react';
import { AlbumProps } from '../types/Album';

import {
    Image,
    Star,
    OverlayContainer,
    Item,
    ButtonContainer,
    Button,
    List,
} from './styled';

interface Props {
    album: AlbumProps
    isFavorited: boolean;
    isOpen: boolean;
    onClose: () => any
    toggleFavorite: (e: React.SyntheticEvent, index: number) => any,
}

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

            <OverlayContainer>

                <Image src={image} alt="albumCover" />

                <List>
                    <Item>{name}</Item>
                    <Item style={{ fontWeight: 600 }}>{artist}</Item>
                    <Item>{price}</Item>
                    <Item style={{ fontSize: '0.5rem', fontStyle: 'italic' }}>{rights}</Item>
                </List>

            </OverlayContainer>

            <ButtonContainer>
                <Star canGrow isFavorited={isFavorited} onClick={(e: React.SyntheticEvent) => toggleFavorite(e, index)}>{String.fromCharCode(9733)}</Star>
                <Button style={{ width: '12vw' }} onClick={() => window.open(url, "_blank")}>See in iTunes</Button>
                <Button style={{ backgroundColor: '#d34444', width: '8vw' }} onClick={onClose}>Close</Button>
            </ButtonContainer>

        </div>
    );
}

export default Overlay;




