import styled from '@emotion/styled';

const OverlayContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5rem;
    min-height: 25vh;
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

export {
    OverlayContainer,
    Item,
    ButtonContainer,
    Button,
    List,
}