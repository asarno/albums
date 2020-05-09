import styled from '@emotion/styled';

interface Props {
    isSelected: boolean;
}

const Card = styled.span<Props>`
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

    transform: ${({ isSelected }: Props) => isSelected ? "scale(1.07)" : ""};
    transition: transform 0.3s ease-in-out;
`;

export default Card;