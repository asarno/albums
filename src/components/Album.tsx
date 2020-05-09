import React from 'react';
import { AlbumProps } from '../types/Album';

import RCTooltip from "rc-tooltip";
import "rc-tooltip/assets/bootstrap.css";

import {
    Card,
    Name,
    Artist,
    Star,
    Tip,
    Image,
} from './styled';

interface Props {
    isSelected: boolean;
    isFavorited: boolean;
    favoritesSelected: boolean;
    album: AlbumProps;
    handleStarClick: any;
    handleCardClick: () => any;
}

function Album({
    isSelected,
    isFavorited,
    favoritesSelected,
    album,
    handleStarClick,
    handleCardClick,
}: Props) {
    const { name, artist, image } = album;

    return (
        <Card
            isSelected={isSelected}
            onClick={handleCardClick}
        >
            <Image alt={`${name}-cover`} src={image} />
            <Name>{name}</Name>
            <Artist>{artist}</Artist>
            {!favoritesSelected &&
                <RCTooltip placement="bottom" overlay={<Tip>{isFavorited ? "Remove" : "Add"}</Tip>}>
                    <Star isFavorited={isFavorited} onClick={handleStarClick}>{String.fromCharCode(9733)}</Star>
                </RCTooltip>
            }
        </Card>
    );
}

export default Album;
