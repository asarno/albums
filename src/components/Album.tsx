import React from 'react';
import styled from '@emotion/styled';
import { AlbumProps } from '../types/Album';
import RCTooltip from "rc-tooltip";
import "rc-tooltip/assets/bootstrap.css";

interface Props {
    isSelected: boolean;
    isFavorited: boolean;
    favoritesSelected: boolean;
    album: AlbumProps;
    handleStarClick: (e: React.SyntheticEvent, index: number) => any;
    handleCardClick: () => any;
}

const Card: any = styled.div`
    box-sizing: border-box;
    background-color: rgb(255, 255, 255);
    box-shadow: rgba(0, 41, 83, 0.2) 0px 1px 3px 0px;
    position: relative;
    width: 231px;
    height: 315px;
    border-radius: 10px;
    margin: 0px auto 2.25rem;
    padding: 1.125rem 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin: 1rem;

    transform: ${({ isSelected }: any) => isSelected ? "scale(1.07)" : ""};
    transition: transform 0.3s ease-in-out;
`;

const Title = styled.span`
    font-size: 0.65rem;
    margin: 0.5rem;
    text-align: center;
`;

const Artist = styled.span`
    font-size: 0.75rem;
    margin: 0.5rem;
    text-align: center;
    font-weight: bold;
`;

const Star: any = styled.span`
    color: ${({ isFavorited }: any) => isFavorited ? "#e2e240" : "#d3d3d3"};
    font-size: 2rem;
    pointer-events: inherit;
`;

const Tip = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 45px;
    height: auto;
    text-align: center;
    vertical-align: center;
`;

const Image = styled.img`
    width: 170px;
    height: 170px;
`;

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
            <Title>{name}</Title>
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
