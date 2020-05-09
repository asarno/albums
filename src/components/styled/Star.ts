import styled from '@emotion/styled';

interface Props {
    isFavorited: boolean;
    canGrow?: boolean;
}

const Star = styled.span<Props>`
    color: ${({ isFavorited }: Props) => isFavorited ? "#e2e240" : "#d3d3d3"};
    font-size: 2rem;
    pointer-events: inherit;
    cursor: pointer;
    margin: 0.5rem;

    &:hover {
        transform: ${({ canGrow }: Props) => canGrow ? "scale(1.015);" : ""}
      }
`;

export default Star;